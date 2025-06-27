import { ILogger, LoggerConfig } from '../types';
import { createLogger } from './loggerFactory';


export function setupLogger(
  config: LoggerConfig,
): ILogger {
  if (config.logger) return config.logger;
  if (config?.circuitBreaker?.enabled) {
    console.warn('Circuit breaker is enabled, consider configuring logger accordingly.');
  }
  return createLogger({ ...config });
}



export class Logger {
  private static logger: ILogger;
  static get instance(): ILogger {
    if (!this.logger) {
      throw new Error('Logger not initialized. Call Logger.initialize(config) first.');
    }
    return this.logger;
  }
  constructor() { }

  // Additional methods can be added as needed
  static initialize(config: LoggerConfig) {
    this.logger = setupLogger({ ...config });
  }
}