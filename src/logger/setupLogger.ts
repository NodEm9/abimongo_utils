// logger/setupLogger.ts
import { AbimongoConfig, ILogger, LoggerConfig } from '../types';
import { createLogger } from './loggerFactory';

export type InitLoggerWithCircuitBreaker = {
  config: LoggerConfig;
  advancedConfig?: AbimongoConfig;
};

export function setupLogger(
  config: LoggerConfig,
  advancedConfig?: AbimongoConfig
): ILogger {
  if (config.logger) return config.logger;
  if (advancedConfig?.advanced?.circuitBreaker?.enabled) {
    console.warn('Circuit breaker is enabled, consider configuring logger accordingly.');
  }
  return createLogger({ ...config }, advancedConfig);
}



export class Logger {
  private static logger: ILogger;

  constructor() {}

  // Additional methods can be added as needed
 static initialize({ config, advancedConfig }: InitLoggerWithCircuitBreaker) {
    this.logger = setupLogger(config, advancedConfig);
  }
}