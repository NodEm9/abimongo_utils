import * as fs from 'fs';
import { Transporter, LogLevel, LogEntry } from '../types/logger.types';
export declare class FileTransporter implements Transporter {
    private stream;
    constructor(stream: fs.WriteStream);
    write(message: string): void;
    log(level: LogLevel, message: string, meta?: any[]): void;
}
export declare const formatLog: (entry: LogEntry) => string;
