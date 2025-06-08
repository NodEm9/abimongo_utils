# abimongo_utils

A modular utility library for Node.js projects, starting with a robust, extensible logger utility. This library is designed to be expanded with additional utilities over time, making it a central toolkit for your backend applications.

---

## Features

- **Advanced Logger Utility**  
  - Customizable log levels (`info`, `debug`, `error`, etc.)
  - Pluggable transporters (console, file, custom)
  - Hooks for log and error events
  - Metadata enrichment
  - Source-based log exclusion
  - TypeScript support

---

## Installation

```sh
npm install abimongo_utils
```

---

## Usage

### Logger Utility

#### Basic Setup

```typescript
import { setupLogger } from 'abimongo_utils/logger/setupLogger';

const logger = setupLogger({
  level: 'info',
  transporters: [
    {
      write: (msg: string) => {
        // Write to console, file, or any custom destination
        console.log(msg);
      }
    },
    // Add other properties here
  ],
  hooks: {
    onLog: (msg, meta) => {
      // Custom logic after logging
    },
    onError: (err, meta) => {
      // Custom error handling
    }
  },
  enrichMetadata: (meta) => ({
    ...meta,
    timestamp: new Date().toISOString(),
  }),
  excludedSources: ['test'],
});
```

#### Logging

```typescript
logger.info('Application started', { source: 'app' });
logger.error('Something went wrong', { source: 'service', error: new Error('fail') });
```

#### Using a Custom Logger

If you already have a logger instance, you can pass it to `setupLogger`:

```typescript
const customLogger = {
  info: (msg: string) => { /* ... */ },
  error: (msg: string) => { /* ... */ },
};

const logger = setupLogger({ logger: customLogger });
```

---

## Development

### Running Locally with Docker

A `docker-compose.yml` is provided for local development:

```sh
docker-compose up
```

This will mount your code, install dependencies, build the library, and keep the container running for development and testing.

### Scripts

- `npm run build` – Build the library
- `npm test` – Run tests
- `npm run lint` – Lint the codebase

---

## Publishing

This library is published to npm via GitHub Actions when a new version tag (`v*.*.*`) is pushed to the `main` or `master` branch.

---

## Extending the Library

The `abimongo_utils` library is designed to be extended. Future utilities can be added under the `src/` directory and exported via the main entry point.

---

## License

ISC

---

## Maintainers

- Emmanuel Nodolomwanyi ([padave805@gmail.com](mailto:padave805@gmail.com))

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for new utilities or improvements.
