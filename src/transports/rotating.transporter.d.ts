import { RotatingFileTransporterOptions } from '../types/logger.types';
export declare function createRotatingFileTransporter(options?: RotatingFileTransporterOptions): {
    write: (message: string) => boolean;
};
