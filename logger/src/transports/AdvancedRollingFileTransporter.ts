import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { setInterval, clearInterval } from 'timers';
import { LogLevel } from '../types';
import { MetricsTracker } from 'utils';

const gzip = promisify(zlib.gzip);
const streamPipeline = promisify(pipeline);

interface RollingFileOptions {
  filename: string;
  maxSize?: number; // in bytes
  backupCount?: number;
  frequency?: 'daily' | 'hourly';
  compress?: boolean;
  flushInterval?: number; // in ms
}

export class AdvancedRollingFileTransporter {
  private currentStream: fs.WriteStream;
  private currentSize = 0;
  private lastRolledAt: Date;
  private flushTimer?: NodeJS.Timeout;
  private buffer: string[] = [];
  private metrics = new MetricsTracker();

  constructor(private options: RollingFileOptions) {
    this.options.maxSize = this.options.maxSize || 5 * 1024 * 1024;
    this.options.backupCount = this.options.backupCount || 5;
    this.options.frequency = this.options.frequency || 'daily';
    this.options.compress = this.options.compress ?? false;
    this.options.flushInterval = this.options.flushInterval ?? 3000;

    this.lastRolledAt = new Date();
    this.currentStream = this.createWriteStream();
    this.startFlusher();
  }

  private createWriteStream(): fs.WriteStream {
    const base = this.options.filename;
    const logDir = path.dirname(base);
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

    return fs.createWriteStream(base, { flags: 'a' });
  }

  private getTimestampSuffix(): string {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');

    const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    const time = `${pad(now.getHours())}-${pad(now.getMinutes())}`;

    return this.options.frequency === 'daily' ? date : `${date}_${time}`;
  }

  private async rotateIfNeeded(): Promise<void> {
    const filePath = this.options.filename;
    const stat = fs.existsSync(filePath) ? fs.statSync(filePath) : null;
    const now = new Date();

    const shouldRotateBySize = stat && stat.size >= (this.options.maxSize || 0);
    const shouldRotateByTime = this.shouldRotateByTime(now);

    if (shouldRotateBySize || shouldRotateByTime) {
      this.currentStream.end();
      const suffix = this.getTimestampSuffix();
      const rotatedFile = `${filePath}.${suffix}`;

      fs.renameSync(filePath, rotatedFile);
      this.metrics.trackRotation();

      if (this.options.compress) {
        const compressed = `${rotatedFile}.gz`;
        await streamPipeline(
          fs.createReadStream(rotatedFile),
          zlib.createGzip(),
          fs.createWriteStream(compressed)
        );
        this.metrics.trackRotation();
        fs.unlinkSync(rotatedFile);
      }

      this.cleanupOldLogs();
      this.currentStream = this.createWriteStream();
      this.lastRolledAt = now;;
      this.currentSize = 0;
      this.metrics.trackRotation();
    }
  }

  private shouldRotateByTime(now: Date): boolean {
    const last = this.lastRolledAt;

    if (this.options.frequency === 'daily') {
      return now.getDate() !== last.getDate();
    } else if (this.options.frequency === 'hourly') {
      return now.getHours() !== last.getHours() || now.getDate() !== last.getDate();
    }

    return false;
  }

  private cleanupOldLogs() {
    const base = path.basename(this.options.filename);
    const dir = path.dirname(this.options.filename);
    const allFiles = fs.readdirSync(dir);

    const rotated = allFiles
      .filter(f => f.startsWith(base + '.') && (!this.options.compress || f.endsWith('.gz')))
      .sort((a, b) => fs.statSync(path.join(dir, b)).mtime.getTime() - fs.statSync(path.join(dir, a)).mtime.getTime());

    const toDelete = rotated.slice(this.options.backupCount);
    for (const file of toDelete) {
      fs.unlinkSync(path.join(dir, file));
    }
  }

  private startFlusher() {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.options.flushInterval);
  }

  public async write(message: string, _level?: LogLevel): Promise<void> {
    this.metrics.trackLog();
    console.log('[rotate] happened here') 
    this.buffer.push(message);

    // Check if the total size of the buffer exceeds the maxSize limit
    // This is to ensure we don't exceed the maxSize limit before flushing
    const totalSize = Buffer.byteLength(this.buffer.join(''));
    if (totalSize >= (this.options.maxSize || Infinity)) {
      await this.flush(); // ✅ triggers flush counter
    }
  }

  public async flush(): Promise<void> {
    if (this.buffer.length === 0) return;

    const raw = this.buffer.join('');
    this.buffer = [];

    await this.rotateIfNeeded();

    // this.currentStream.write(raw + '\n');
    // this.currentSize += Buffer.byteLength(raw + '\n');

    // this.metrics.trackFlush(); // ✅ must be here
    // console.log('📦[Flushed]: Flushed log entries to stream');

    if (this.options.compress) {
      try {
        const compressed = await gzip(Buffer.from(raw + '\n'));
        this.currentStream.write(compressed);
        this.currentSize += compressed.length;
        this.metrics.trackFlush();
        console.log('📦 Compressed and wrote log entry');
      } catch (err: any) {
        this.metrics.trackFlush();
        console.warn('⚠️ Compression failed. Writing uncompressed:', err.message);
        this.currentStream.write(raw + '\n');
        this.currentSize += Buffer.byteLength(raw + '\n');
        console.log('📦 Wrote log entry without compression');
      }
    } else {
      this.currentStream.write(raw + '\n');
      this.currentSize += Buffer.byteLength(raw + '\n');
      this.metrics.trackFlush();
      console.log('📦 Wrote log entry without compression');
    }
  }


  public close(): void {
    if (this.flushTimer) clearInterval(this.flushTimer);
    this.flush();
    this.currentStream.end();
  }
}

