// rotating.transporter.ts
import { DateRollingFileStream } from 'streamroller';

import path from 'path';

interface RotatingFileTransporterOptions {
	filename?: string;
	frequency?: string;  // e.g., 'daily'
	maxSize?: number;    // in bytes
	backups?: number;    // number of backups to keep
}

export function createRotatingFileTransporter(options?: RotatingFileTransporterOptions) {
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

  return {
    write: (message: string) => stream.write(message),
  };
}
