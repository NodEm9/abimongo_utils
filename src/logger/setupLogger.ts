// logger/setupLogger.ts
import { AbimongoConfig, ILogger, LoggerConfig } from '../types';
import { createLogger } from './loggerFactory';

// export type InitLoggerWithCircuitBreaker = {
//   advancedConfig?: AbimongoConfig;
// };

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

  constructor() {}

  // Additional methods can be added as needed
 static initialize(config: LoggerConfig) {
    this.logger = setupLogger({ ...config });
  }
}