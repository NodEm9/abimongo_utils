// src/transporters/FileTransporter.ts
import * as fs from 'fs';
import { now } from '../utils/timeUtils';
import { Transporter, LogLevel, LogTransport, LogEntry, LogMeta } from '../types/logger.types';

export class FileTransporter implements Transporter {
  constructor(public stream: fs.WriteStream) { }
  write(message: string): Promise<void> {
    const formattedLog = formatLog({level: 'info', message, timestamp: now(), meta: []}); ;
    this.stream.write(formattedLog + '\n');
    return Promise.resolve();
  }
  log(level: LogLevel, message: string, meta: any[] = []): Promise<void> {
    const formattedLog = formatLog({
      level,
      message,
      timestamp: now(),
      meta
    });
    this.stream.write(formattedLog + '\n');
    return Promise.resolve();
  }
}

export const formatLog = (entry: LogEntry) => {
  const { level, message, meta, timestamp } = entry;
  const formattedMeta = meta.length > 0 ? ` ${JSON.stringify(meta)}` : '';
  return `[${timestamp}] - ${level.toUpperCase()}: ${message}${formattedMeta}`;
};

/**
 * Creates a file transport for logging.
 * @param filePath The path to the file where logs will be written.
 * @returns 
 */
export const createFileTransporter = (filePath: string): FileTransporter => {
  const stream = fs.createWriteStream(filePath, { flags: 'a' });
  return new FileTransporter(stream);
}
