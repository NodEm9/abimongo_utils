import { AbimongoConfig, LoggerConfig } from '../types/abimongoConfig';
import { LOG_LEVELS, shouldLog, colorByLevel } from '../logger';
import { ILogger, LogEntry, LogLevel } from '../types/logger.types';
import { formatJSON, formatMessage } from '../utils/formatters';
import { now } from '../utils/timeUtils';

/**
 * Creates a logger instance based on the provided configuration.
 * 
 * @param {LoggerConfig} config - The configuration for the logger.
 * @param {AbimongoConfig} [abimongoConfig] - Optional Abimongo configuration.
 * @returns {ILogger} - The logger instance.
 */

export function createLogger(config: LoggerConfig, abimongoConfig?: AbimongoConfig): ILogger {
	const {
		level = 'info',
		transports = [],
		colorize = true,
		json = false,
		excludedSources = [],
		formatOptions,
		hooks
	} = config

	const writeToTransports = (level: string, formatted: string) => {
		transports.map((t) => {
			try {
				if ('write' in t) t.write(formatted)
				// else ('log' in t) && t.log?.(level, formatted);
			} catch (error) {
				hooks?.onError?.(error)
			}
		})
	}

	const shouldLogLevel = (
		config: LoggerConfig,
		level: LogLevel,
		meta?: Record<string, any>
	): boolean => {
		if (typeof config.shouldLog === 'function') {
			return config.shouldLog(level, meta);
		}
		const configuredLevelIndex = LOG_LEVELS[config.level ?? 'info'];
		const currentLevelIndex = LOG_LEVELS[level];
		return currentLevelIndex >= configuredLevelIndex;
	}

	const log = (levelKey: LogLevel) => {
		return (message: string, ...meta: any[]) => {
			const source = meta?.[0]?.source ?? '';
			if (excludedSources.includes(source)) return;

			const metadata: LogEntry = {
				timestamp: now(),
				level: level,
				message,
				meta: meta.length === 1 && typeof meta[0] === 'object' ? meta[0] : meta,
			};

			// Enrich metadata if user supplied enrichMetadata()
			const enriched = config.enrichMetadata ? config.enrichMetadata(metadata) : metadata;

			// Filter out logs based on the shouldLog function
			if (!shouldLogLevel(config, levelKey, enriched)) return;

			const formatted = formatMessage(
				levelKey,
				message,
				enriched as LogEntry[],
				formatOptions
			);
			const output = formatOptions?.colorize
				? colorByLevel(levelKey, formatted)
				: formatted
					? (colorize == true
						?
						colorByLevel(levelKey, formatted)
						: formatted)
					: formatted
				
			
			// if (json == true) {
			// 	const jsonOutput = formatJSON({ 
			// 		timestamp: now(),
			// 		level: levelKey,
			// 		message,
			// 		meta: enriched,
			// 		source: meta[0]?.source,
			// 		prefix: formatOptions?.prefix,
			// 	})
			// 	const applyColor = colorize == true
			// 		? colorByLevel(levelKey, jsonOutput)
			// 		: jsonOutput
			// 	writeToTransports(levelKey, applyColor);
			// 	return;
			// }
			config.logger?.[levelKey as keyof ILogger]?.(output, ...meta, enriched, colorize);
			writeToTransports(levelKey, output);

			// Fire hooks
			hooks?.onLog?.(metadata);
		};
	}

	return {
		debug: log('debug'),
		info: log('info'),
		warn: log('warn'),
		error: log('error'),
		trace: log('trace')
	};
}
