import { LoggerFormatOptions } from '../types';
export declare function formatMessage(level: string, message: string, meta: any[], options?: LoggerFormatOptions): string;
export declare function formatConsole(level: string, message: string, timestamp: string): string;
export declare function formatJSON(metadata: {}): string;
export declare function formatError(error: Error): string;
