import path from 'path';
import {
  BufferedTransporter,
  AdvancedRollingFileTransporter
} from '../transports';
import { MetricsTracker, formatMsg } from '../utils';
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

/**
 * AbimongoLogger is a custom logger that supports multiple tenants,
 * file-based logging with daily rotation, and metrics tracking.
 * It can log messages in both JSON and text formats.
 *  * @example
 * const logger = new AbimongoLogger({
 *  format: 'json', // or 'text'
 * baseLogPath: '/var/logs/abimongo',
 * streamToRedis: true,
 * redisUrl: 'redis://localhost:6379',
 *  flushInterval: 2000, // flush logs every 2 seconds
 *  flushSize: 20, // flush after 20 log entries
 * });
 * * logger.log('This is a log message', 'info', { tenantId: 'tenant1' });
 * * logger.log('This is an error message', 'error', { tenantId: 'tenant2' });
 */
class AbimongoLogger {
  private transports: Map<string, BufferedTransporter> = new Map();
  private metrics = new MetricsTracker();

  constructor(private options: LoggerOptions = {}) {
    this.options.baseLogPath ||= path.join(__dirname, '../logs');
    this.options.format ||= 'text';

    if (process.env.NODE_ENV !== 'test') {
      this.metrics.start()
    }
  }
  /**
   * Logs a message with the specified level and metadata.
   * @param message The message to log.
   * @param level The log level (default: 'info').
   * @param meta Additional metadata for the log entry.
   */
  async log(message: string, level: LogLevel = 'info', meta: LogMeta = {}) {
    const tenantId = meta.tenantId || 'default';
    const filename = path.join(this.options.baseLogPath!, `${tenantId}.log`);
    const formatted = formatMsg(message, level, [this.options.format]);

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
    this.metrics.trackLog();
    this.metrics.trackRotation();

    console.log(`[${new Date().toISOString()}] [${level}] [${tenantId}] ${formatted}`);
  }

  async flushAll() {
    for (const t of this.transports.values()) {
      await t.flush?.();
      this.metrics.trackFlush();
      console.log(`Flushed logs for transport: ${t.constructor.name}`);
    }
  }

  public startTrackingMetrics(interval: number = 60000) {
    this.metrics.start(interval);
    console.log(`Metrics tracking started with interval: ${interval}ms`);
  }

  async close() {
      await this.flushAll();
      for (const t of this.transports.values()) t.stop?.();
    }

  public async shutdown(): Promise<void> {
    this.metrics.stop();
    for (const transport of this.transports.values()) {
      if (typeof transport.stop === 'function') {
        await transport.stop?.();
      }
    }
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

