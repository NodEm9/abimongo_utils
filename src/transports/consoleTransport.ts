import { LogLevel, LogTransport, RemoteTransporter, Transporter } from '../types/logger.types';
import { colorByLevel } from '../logger';
import { formatConsole } from '../utils/formatters';
import { now } from '../utils/timeUtils';

export const consoleTransport = (colorize = true): Transporter => ({
	write(message: string) {
		const timestamp = now();
		const base = formatConsole('info', message, timestamp);
		console.log(colorize ? colorByLevel('info', base) : base);
		return colorize ? colorByLevel('info', base) : base;
	},
	log(level: LogLevel, message: string) {
		const timestamp = now();
		const base = formatConsole(level, message, timestamp);
		console.log(colorize ? colorByLevel(level, base) : base);
		return colorize ? colorByLevel(level, base) : base;
	},
});
