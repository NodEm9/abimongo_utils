// src/transporters/FileTransporter.ts
import * as fs from 'fs';
import { now } from '../utils/timeUtils';
import { Transporter, LogLevel, LogTransport, LogEntry, LogMeta } from '../types/logger.types';

export class FileTransporter implements Transporter {
  constructor(public stream: fs.WriteStream) { }
  write(message: string): void {
    const formattedLog = formatLog({level: 'info', message, timestamp: now(), meta: []}); ;
    this.stream.write(formattedLog + '\n');
  }
  log(level: LogLevel, message: string, meta: any[] = []): void {
    const formattedLog = formatLog({
      level,
      message,
      timestamp: now(),
      meta
    });
    this.stream.write(formattedLog + '\n');
  }
}

export const formatLog = (entry: LogEntry) => {
  const { level, message, meta, timestamp } = entry;
  const formattedMeta = meta.length > 0 ? ` ${JSON.stringify(meta)}` : '';
  return `[${timestamp}] - ${level.toUpperCase()}: ${message}${formattedMeta}`;
};

export const createFileTransport = (filePath: string): FileTransporter => {
  const stream = fs.createWriteStream(filePath, { flags: 'a' });
  return new FileTransporter(stream);
}

export const createFileTransporter = (filePath: string) => {
  const fileTransporter = createFileTransport(filePath);
  return {
    write: (message: string) => fileTransporter.write(message),
    log: (level: LogLevel, message: string, meta: any[] = []) => fileTransporter.log(level, message, meta)
  };
};