[**abimongo_utils v1.1.0**](../README.md)

***

[abimongo_utils](../README.md) / AsyncBatchTransporterOptions

# Interface: AsyncBatchTransporterOptions

Defined in: [types/logger.types.ts:49](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/logger.types.ts#L49)

## Properties

### batchSize?

> `optional` **batchSize**: `number`

Defined in: [types/logger.types.ts:50](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/logger.types.ts#L50)

***

### flushInterval?

> `optional` **flushInterval**: `number`

Defined in: [types/logger.types.ts:51](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/logger.types.ts#L51)

***

### sendBatch()

> **sendBatch**: (`entries`) => `Promise`\<`void`\>

Defined in: [types/logger.types.ts:52](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/types/logger.types.ts#L52)

#### Parameters

##### entries

[`LogEntry`](LogEntry.md)[]

#### Returns

`Promise`\<`void`\>
