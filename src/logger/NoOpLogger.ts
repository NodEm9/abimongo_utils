// logger/NoOpLogger.ts
import { ILogger } from '../types/ILogger';

export class NoOpLogger implements ILogger {
  debug() {}
  info() {}
  warn() {}
  error() {}
  trace() {}
}
