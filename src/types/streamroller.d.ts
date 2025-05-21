// types/streamroller.d.ts
declare module 'streamroller' {
  import { Writable } from 'stream';

  export class DateRollingFileStream extends Writable {
    constructor(
      filename: string,
      pattern?: string, // e.g., 'yyyy-MM-dd'
      options?: {
        maxSize?: number;
        backups?: number;
        compress?: boolean;
        encoding?: string;
      }
    );
  }
}


// import { Writable } from 'stream';

// declare module 'streamroller' {

// 	export interface DateRollingFileStreamOptions {
// 		filename: string;
// 		pattern?: string;
// 		alwaysIncludePattern?: boolean;
// 		daysToKeep?: number;
// 		compress?: boolean;
// 		encoding?: string;
// 		mode?: number;
// 		flags?: string;
// 	}

// 	export class DateRollingFileStream extends Writable {
// 		constructor(filename: string, options?: DateRollingFileStreamOptions);
// 		roll(): void;
// 	}

// 	export interface RollingFileStreamOptions {
// 		filename: string;
// 		maxSize?: number;
// 		numToKeep?: number;
// 		compress?: boolean;
// 		encoding?: string;
// 		mode?: number;
// 		flags?: string;
// 	}

// 	export class RollingFileStream extends Writable {
// 		constructor(filename: string, options?: RollingFileStreamOptions);
// 		roll(): void;
// 	}
// }