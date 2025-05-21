import { now } from '../utils';
import {
  LogEntry,
  AsyncBatchTransporterOptions,
  LogLevel
} from '../types/logger.types';


// This class is used to send log entries in batches asynchronously.
// It buffers log entries and sends them in batches to a specified endpoint.
export class AsyncBatchTransporter {
  private buffer: LogEntry[] = [];
  private readonly batchSize: number;
  private readonly flushInterval: number;
  private readonly sendBatch: (entries: LogEntry[]) => Promise<void>;
  private timer?: NodeJS.Timeout;

  constructor(options: AsyncBatchTransporterOptions) {
    this.batchSize = options.batchSize || 10;
    this.flushInterval = options.flushInterval || 5000;
    this.sendBatch = options.sendBatch;

    this.start();
  }

  public log(level: LogLevel, message: string, meta: any[]) {
    this.buffer.push({
      timestamp: now(),
      level,
      message,
      meta,
    });

    // Check if the buffer has reached the batch size
    // If so, flush the buffer
    if (this.buffer.length >= this.batchSize) {
      this.flush();
    }
  }

  public async flush() {
    if (this.buffer.length === 0) return;

    const entries = this.buffer.splice(0, this.buffer.length);
    try {
      await this.sendBatch(entries);
    } catch (error) {
      // You might want to add retry logic or fallback here
      console.error('Failed to send log batch:', error);
    }
  }

  private start() {
    this.timer = setInterval(() => this.flush(), this.flushInterval);
  }

  public stop() {
    clearInterval(this.timer);
    this.flush();
  }
}
