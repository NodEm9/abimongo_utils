// src/transporters/FileTransporter.ts
import fs from 'fs';
import path from 'path';
import { now } from '../utils/timeUtils';
import { Transporter, LogLevel, LogTransport, LogEntry } from '../types/logger.types';

export class FileTransporter implements Transporter {
  constructor(private stream: fs.WriteStream) { }

  write(message: string): void {
    const formattedLog = formatLog({level: 'info', message, timestamp: now(), meta: []}); ;
    this.stream.write(formattedLog + '\n');
  }
  
  log(level: LogLevel, message: string, meta: any[] = []) {
    const formttedMsg = formatLog({level, message, timestamp: now(), meta});
    this.stream.write(formttedMsg + '\n');
  }
}

export const formatLog = (entry: LogEntry) => {
  const { level, message, meta, timestamp } = entry;
  const formattedMeta = meta.length > 0 ? ` ${JSON.stringify(meta)}` : '';
  return `[${timestamp}] - ${level.toUpperCase()}: ${message}${formattedMeta}`;
};