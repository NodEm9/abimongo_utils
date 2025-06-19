[**abimongo_utils v1.1.0**](../README.md)

***

[abimongo_utils](../README.md) / LoggerConfig

# Interface: LoggerConfig

Defined in: [types/abimongoConfig.ts:19](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L19)

## Properties

### circuitBreaker?

> `optional` **circuitBreaker**: `object`

Defined in: [types/abimongoConfig.ts:30](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L30)

#### enabled?

> `optional` **enabled**: `boolean`

#### retryAttempts?

> `optional` **retryAttempts**: `number`

#### retryDelay?

> `optional` **retryDelay**: `number`

***

### colorize?

> `optional` **colorize**: `boolean`

Defined in: [types/abimongoConfig.ts:22](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L22)

***

### enrichMetadata()?

> `optional` **enrichMetadata**: (`meta`) => `Record`\<`string`, `any`\>

Defined in: [types/abimongoConfig.ts:28](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L28)

#### Parameters

##### meta

`Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

***

### excludedSources?

> `optional` **excludedSources**: `string`[]

Defined in: [types/abimongoConfig.ts:25](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L25)

***

### formatOptions?

> `optional` **formatOptions**: [`LoggerFormatOptions`](LoggerFormatOptions.md)

Defined in: [types/abimongoConfig.ts:26](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L26)

***

### hooks?

> `optional` **hooks**: [`LoggerHooks`](LoggerHooks.md)

Defined in: [types/abimongoConfig.ts:27](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L27)

***

### json?

> `optional` **json**: `boolean`

Defined in: [types/abimongoConfig.ts:23](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L23)

***

### level?

> `optional` **level**: [`LogLevel`](../type-aliases/LogLevel.md)

Defined in: [types/abimongoConfig.ts:21](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L21)

***

### logger?

> `optional` **logger**: [`ILogger`](ILogger.md)

Defined in: [types/abimongoConfig.ts:20](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L20)

***

### shouldLog()?

> `optional` **shouldLog**: (`level`, `meta?`) => `boolean`

Defined in: [types/abimongoConfig.ts:29](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L29)

#### Parameters

##### level

[`LogLevel`](../type-aliases/LogLevel.md)

##### meta?

`Record`\<`string`, `any`\>

#### Returns

`boolean`

***

### transports?

> `optional` **transports**: (`WriteStream` \| [`RemoteTransporter`](../type-aliases/RemoteTransporter.md))[]

Defined in: [types/abimongoConfig.ts:24](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/abimongoConfig.ts#L24)
