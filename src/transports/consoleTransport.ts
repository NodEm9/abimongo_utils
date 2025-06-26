import { LogLevel, Transporter } from '../types/logger.types';
import { colorByLevel } from '../logger';
import { formatConsole } from '../utils/formatters';
import { now } from '../utils/timeUtils';

export const consoleTransport = (colorize = true): Transporter => ({
	write: (message: string, level?: LogLevel) => {
		const timestamp = now();
		const base = formatConsole(level || 'info', message, timestamp);
		colorize ? colorByLevel(level || 'info', base) : base;
		return Promise.resolve();
	}
})
