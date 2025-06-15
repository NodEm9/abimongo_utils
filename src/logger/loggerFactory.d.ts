import { AbimongoConfig, LoggerConfig } from '../types/abimongoConfig';
import { ILogger } from '../types/logger.types';
/**
 * Creates a logger instance based on the provided configuration.
 *
 * @param {LoggerConfig} config - The configuration for the logger.
 * @param {AbimongoConfig} [abimongoConfig] - Optional Abimongo configuration.
 * @returns {ILogger} - The logger instance.
 */
export declare function createLogger(config: LoggerConfig, abimongoConfig?: AbimongoConfig): ILogger;
