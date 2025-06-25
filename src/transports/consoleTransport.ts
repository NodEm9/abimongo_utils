// import { LogLevel, Transporter } from '../types/logger.types';
// import { colorByLevel } from '../logger';
// import { formatConsole } from '../utils/formatters';
// import { now } from '../utils/timeUtils';

// export const consoleTransport = (colorize = true): Transporter => ({
// 	write: (msg: string) => {
// 		let level!: LogLevel;
// 		const timestamp = now();
// 		const base = formatConsole(level, msg, timestamp);
// 		console.log(colorize ? colorByLevel(level, base) : base);
// 		return colorize ? colorByLevel(level, base) : base;
// 	}
// })

import { LogLevel, LogTransport } from '../types/logger.types';
import { colorByLevel } from '../logger';
import { formatConsole } from '../utils/formatters';
import { now } from '../utils/timeUtils';

export const consoleTransport = (colorize = true): LogTransport => ({
	log(level: LogLevel, message: string) {
		const timestamp = now();
		const base = formatConsole(level, message, timestamp);
		console.log(colorize ? colorByLevel(level, base) : base);
		return colorize ? colorByLevel(level, base) : base;
	},
});
