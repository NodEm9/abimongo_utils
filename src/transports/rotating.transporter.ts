import { DateRollingFileStream } from 'streamroller';
import path from 'path';
import { RotatingFileTransporterOptions } from '../types/logger.types';

/**
 * Creates a rotating file transporter for logging.
 * 
 * @param {RotatingFileTransporterOptions} options - Configuration options for the rotating file transporter.
 * @returns {Function} A function that writes log messages to the rotating file.
 */
export function createRotatingFileTransporter(
  options?: RotatingFileTransporterOptions
) {
  const {
    filename = path.join(__dirname, '../logs/abimongo.log'),
    frequency = 'daily',
    maxSize = 5 * 1024 * 1024, // 5MB default
    backups = 5,
  } = options || {};

  const stream = new DateRollingFileStream(filename, frequency, {
    maxSize,
    backups,
    compress: false,
  });

  const write = (message: string) => stream.write(message)
  
  return write
  
}