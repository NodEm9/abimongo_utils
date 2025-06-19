[**abimongo_utils v1.1.0**](../README.md)

***

[abimongo_utils](../README.md) / LoggerHooks

# Interface: LoggerHooks

Defined in: [types/logger.types.ts:55](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/logger.types.ts#L55)

## Properties

### onError()?

> `optional` **onError**: (`error`, `entry?`) => `void`

Defined in: [types/logger.types.ts:58](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/logger.types.ts#L58)

#### Parameters

##### error

`any`

##### entry?

[`LogEntry`](LogEntry.md) | [`LogEntry`](LogEntry.md)[]

#### Returns

`void`

***

### onFlush()?

> `optional` **onFlush**: (`batch`) => `void`

Defined in: [types/logger.types.ts:57](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/logger.types.ts#L57)

#### Parameters

##### batch

[`LogEntry`](LogEntry.md)[]

#### Returns

`void`

***

### onLog()?

> `optional` **onLog**: (`entry`) => `void`

Defined in: [types/logger.types.ts:56](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/logger.types.ts#L56)

#### Parameters

##### entry

[`LogEntry`](LogEntry.md)

#### Returns

`void`
