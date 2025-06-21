import fs from 'fs';

import {
	LoggerFormatOptions,
	LoggerHooks,
	LogLevel,
	ILogger,
	Transporter,
} from "./logger.types";
import { RemoteTransporter } from '../types';
import Stream from 'stream';

export type AbimongoConfig = {
	circuitBreaker?: {
		enabled?: boolean;
		retryAttempts?: number;
		retryDelay?: number;
	};
}

export interface LoggerConfig {
	logger?: ILogger;
	level?: LogLevel;
	colorize?: boolean;
	json?: boolean;
	transports?: Array<Transporter | RemoteTransporter>;
	excludedSources?: string[];
	formatOptions?: LoggerFormatOptions;
	hooks?: LoggerHooks;
	enrichMetadata?: (meta: Record<string, any>) => Record<string, any>;
	shouldLog?: (level: LogLevel, meta?: Record<string, any>) => boolean;
	circuitBreaker?: AbimongoConfig['circuitBreaker'];
}

