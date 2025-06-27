import * as  chalk from 'chalk';
import { LogLevel } from '../types';

/**
 * Colorizes a log message based on its level.
 * @param level - The log level (e.g., 'info', 'debug', 'warn', 'error', 'fatal', 'trace').
 * @param message - The log message to colorize.
 * @returns A string with the colored log message.
 */
export function colorByLevel(level: string, message: string): string {
  switch (level) {
    case 'info': return chalk.blue(message);
    case 'debug': return chalk.gray(message);
    case 'warn': return chalk.yellow(message);
    case 'error': return chalk.red(message);
    case 'fatal': return chalk.bgRed.white(message);
    case 'trace': return chalk.magenta(message);
    default: return message;
  }
};

/**
 * Colorizes the log level for console output.
 * @param level - The log level to colorize.
 * @returns A string with the colored log level.
 */
// export function colorize(level: LogLevel): string {
//   const colorMap: Record<LogLevel, string> = {
//     info: chalk.blue('INFO'),
//     debug: chalk.gray('DEBUG'),
//     warn: chalk.yellow('WARN'),
//     error: chalk.red('ERROR'),
//     fatal: chalk.bgRed.white('FATAL'),
//     trace: chalk.magenta('TRACE'),
//   };

//   return colorMap[level] || level.toUpperCase();
// }