import { Transporter } from '../types/logger.types';
import { colorByLevel } from '../logger';
import { formatConsole } from '../utils/formatters';
import { now } from '../utils/timeUtils';
import Stream from 'stream';

export const consoleTransport = (colorize = true): Transporter => ({
	write: (msg: string) => {
		const timestamp = now();
		const base = formatConsole('info', msg, timestamp);
		console.log(colorize ? colorByLevel('info', base) : base);
		return colorize ? colorByLevel('info', base) : base;
	}
})