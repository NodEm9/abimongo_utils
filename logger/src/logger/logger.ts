import path from 'path';
import {
  BufferedTransporter,
  AdvancedRollingFileTransporter
} from '../transports';
import { formatMsg } from '../utils';
import { LogLevel } from '../types';


interface LoggerOptions {
  format?: 'json' | 'text';
  baseLogPath?: string;
  streamToRedis?: boolean;
  redisUrl?: string;
  flushInterval?: number;
  flushSize?: number;
}

interface LogMeta {
  tenantId?: string;
}

class AbimongoLogger {
  private transports: Map<string, BufferedTransporter> = new Map();
  private metrics = {
    totalLogs: 0,
    flushedBuffers: 0,
    rotations: 0,
    logsPerMinute: 0,
  };
  private logsLastMinute = 0;

  constructor(private options: LoggerOptions = {}) {
    this.options.baseLogPath ||= path.join(__dirname, '../logs');
    this.options.format ||= 'text';


    setInterval(() => {
      this.metrics.logsPerMinute = this.logsLastMinute;
      this.logsLastMinute = 0;
      this.metrics.flushedBuffers = 0; // Reset after reporting
      this.metrics.rotations = 0; // Reset after reporting
      console.log('Metrics:', this.metrics);
    }, 60_000);
  }

  async log(message: string, level: LogLevel = 'info', meta: LogMeta = {}) {
    const tenantId = meta.tenantId || 'default';
    const filename = path.join(this.options.baseLogPath!, `${tenantId}.log`);
    const formatted = formatMsg(message, level, [this.options.format] );

    let transport = this.transports.get(tenantId);
    if (!transport) {
      const fileTransport = new AdvancedRollingFileTransporter({
        filename,
        frequency: 'daily',
        maxSize: 5 * 1024 * 1024,
        backupCount: 5,
        compress: true,
        flushInterval: this.options.flushInterval,
      });

      const buffered = new BufferedTransporter(fileTransport, {
        flushInterval: this.options.flushInterval || 3000,
        flushSize: this.options.flushSize || 10,
      });

      this.transports.set(tenantId, buffered);
      transport = buffered;
    }

    await transport.write(formatted, level);
    this.metrics.totalLogs++;
    this.logsLastMinute++;

    console.log(`[${new Date().toISOString()}] [${level}] [${tenantId}] ${formatted}`);
  }

  async flushAll() {
    for (const t of this.transports.values()) {
      await t.flush?.();
      this.metrics.flushedBuffers++;
    }
  }

  async close() {
    await this.flushAll();
    for (const t of this.transports.values()) t.stop?.();
  }

  getMetrics() {
    return this.metrics;
  }
}

export const logger = new AbimongoLogger({
  format: 'json', // or 'text'
  streamToRedis: true,
  flushInterval: 2000,
  flushSize: 20,
});
