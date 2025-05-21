import { LoggerFormatOptions } from '../types';
import { colorByLevel } from "../logger";
import { now } from './timeUtils';

export function formatMessage(
  level: string,
  message: string,
  meta: any[],
  options?: LoggerFormatOptions
) {
  const timestamp =
    typeof options?.timestamp === 'function'
      ? options.timestamp()
      : options?.timestamp
        ? now()
        : '';

  const prefix = options?.prefix ?? '';
  const source = meta?.[0]?.source ?? '';
  const parts = [timestamp, '-', `[${level.toUpperCase()}]`, prefix, source, message].filter(Boolean);

  if (options?.json) {
    return formatJSON({
      timestamp,
      level,
      prefix,
      source,
      message,
      meta,
    });
  }

  // console.log(colorByLevel(level, parts.join(' ')));
  return parts.join(' ').trim();
}


export function formatConsole(level: string, message: string, timestamp: string): string {
  return `${timestamp} [${level.toUpperCase()}] ${message}`;
};

export function formatJSON(metadata: {}) {
  return JSON.stringify({ metadata }, null, 2);
}
export function formatError(error: Error): string {
  return `${error.name}: ${error.message}\n${error.stack}`;
}
