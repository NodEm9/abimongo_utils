// logger/setupLogger.ts
import { ILogger, LoggerConfig } from '../types';
import { createLogger } from './loggerFactory';

export function setupLogger(config: LoggerConfig): ILogger {
  if (config.logger) return config.logger;
  return createLogger({ ...config });
}
