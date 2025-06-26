import { Transporter } from "../types";

type BufferedLogEntry = {
  timestamp: string;
  level: string;
  message: string;
  meta: any[];
};


export class BufferedTransporter implements Transporter  {
  private buffer: BufferedLogEntry[] = [];
  private readonly flushInterval: number;
  private readonly flushSize: number;
  private readonly transporter: { write: (message: string) => void };
  private timer?: NodeJS.Timeout; 
  
  constructor(
    transporter: { write: (message: string) => void }, options?: {
    flushInterval?: number; // in milliseconds
    flushSize?: number;     // number of entries before auto flush
  }) {
    this.transporter = transporter;
    this.flushInterval = options?.flushInterval || 5000;
    this.flushSize = options?.flushSize || 10;
    this.startAutoFlush();
  }
 
  public write(message: string, level?: string, meta?: any[]): Promise<void> {
    this.buffer.push({
      timestamp: new Date().toISOString(),
      message,
      level: level || 'info',
      meta: meta || [],
    });

    if (this.buffer.length >= this.flushSize) {
      this.flush();
    }
    return Promise.resolve();
  }

  public flush(): Promise<void> {
    if (this.buffer.length === 0) return Promise.resolve();

    const entries = this.buffer.splice(0, this.buffer.length);
    for (const entry of entries) {
      const logLine = `${entry.timestamp} - ${entry.level.toUpperCase()}: ${entry.message} ${entry.meta}\n`;
      this.transporter.write(logLine);
    }
    if (this.timer) {
      clearInterval(this.timer);
      this.startAutoFlush(); // Restart the timer after flushing
    }
    return Promise.resolve();
  }

  private startAutoFlush() {
    this.timer = setInterval(() => this.flush(), this.flushInterval);
  }

  public stop() {
    clearInterval(this.timer);
    this.flush();
  }
}
