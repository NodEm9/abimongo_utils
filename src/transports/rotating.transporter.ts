// import { DateRollingFileStream } from 'streamroller';
import { AdvancedRollingFileTransporter } from './AdvancedRollingFileTransporter';
import path from 'path';


export interface RotatingFileTransporterOptions {
  filename: string;
  maxSize?: number; // in bytes
  backupCount?: number;
  frequency?: 'daily' | 'hourly';
  compress?: boolean;
  flushInterval?: number; // in ms
}

/**
 * Creates a rotating file transporter for logging.
 * 
 * @param {RotatingFileTransporterOptions} options - Configuration options for the rotating file transporter.
 * @returns {Function} A function that writes log messages to the rotating file.
 */
export function createRotatingFileTransporter(options?: RotatingFileTransporterOptions) {

  const rollingTransport = new AdvancedRollingFileTransporter({
    filename: options?.filename ?? path.join(__dirname, '../logs/abimongo.log'),
    frequency: options?.frequency ?? 'daily',
    maxSize: options?.maxSize ?? 5 * 1024 * 1024, // 5 MB
    backupCount: options?.backupCount ?? 10,
    compress: options?.compress ?? false,
    flushInterval: options?.flushInterval ?? 3000, // 3 seconds
  });

  return {
    write: async (message: string) => {
      const logEntry = `[${new Date().toISOString()}] - ${message}\n`;
      return await rollingTransport.write(logEntry);
    },
    flush: async () => await rollingTransport.flush(),
    close: () => rollingTransport.close(),
  };
}

// const stream = new DateRollingFileStream(filename, frequency, {
//   maxSize,
//   backups,
//   compress: false,
// });