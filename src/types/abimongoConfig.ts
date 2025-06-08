import fs from 'fs';
import {
	LoggerFormatOptions,
	LoggerHooks,
	LogLevel,
	ILogger,
} from "./logger.types";
import { RemoteTransporter } from '../types';

export type AbimongoConfig = {
	advanced?: {
		circuitBreaker?: {
			enabled?: boolean;
			maxFailures?: number;
			resetTimeout?: number;
		};
	}
}

export interface LoggerConfig {
	logger?: ILogger;
	level?: LogLevel;
	colorize?: boolean;
	json?: boolean;
	transports?: Array<fs.WriteStream | RemoteTransporter>;
	excludedSources?: string[];
	formatOptions?: LoggerFormatOptions;
	hooks?: LoggerHooks;
	enrichMetadata?: (meta: Record<string, any>) => Record<string, any>;
	shouldLog?: (level: LogLevel, meta?: Record<string, any>) => boolean;
}

