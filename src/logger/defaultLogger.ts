import { LogLevel, LogMeta } from '../types/logger.types';

export const DefaultLogger = {
  log: (level: LogLevel, message: string, meta?: LogMeta) => {},
  trace: (...args: any[]) => {},
  debug: (...args: any[]) => {},
  info: (...args: any[]) => {},
  warn: (...args: any[]) => {},
  error: (...args: any[]) => {},
  fatal: (...args: any[]) => {},
};