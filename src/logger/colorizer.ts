import * as  chalk from 'chalk';

export function colorByLevel(level: string, message: string): string {
  switch (level) {
    case 'info': return chalk.blue(message);
    case 'debug': return chalk.green(message);
    case 'warn': return chalk.yellow(message);
    case 'error': return chalk.red(message);
    case 'fatal': return chalk.bgRed.white(message);
    case 'trace': return chalk.magenta(message);
    default: return message;
  }
};