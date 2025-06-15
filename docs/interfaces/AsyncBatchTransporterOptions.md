[**abimongo_utils v0.4.0**](../README.md)

***

[abimongo_utils](../README.md) / AsyncBatchTransporterOptions

# Interface: AsyncBatchTransporterOptions

Defined in: [types/logger.types.ts:48](https://github.com/NodEm9/abimongo_utils/blob/a65cd6462ac155e030ff8f62ef498bb805490cbf/src/types/logger.types.ts#L48)

## Properties

### batchSize?

> `optional` **batchSize**: `number`

Defined in: [types/logger.types.ts:49](https://github.com/NodEm9/abimongo_utils/blob/a65cd6462ac155e030ff8f62ef498bb805490cbf/src/types/logger.types.ts#L49)

***

### flushInterval?

> `optional` **flushInterval**: `number`

Defined in: [types/logger.types.ts:50](https://github.com/NodEm9/abimongo_utils/blob/a65cd6462ac155e030ff8f62ef498bb805490cbf/src/types/logger.types.ts#L50)

***

### sendBatch()

> **sendBatch**: (`entries`) => `Promise`\<`void`\>

Defined in: [types/logger.types.ts:51](https://github.com/NodEm9/abimongo_utils/blob/a65cd6462ac155e030ff8f62ef498bb805490cbf/src/types/logger.types.ts#L51)

#### Parameters

##### entries

[`LogEntry`](LogEntry.md)[]

#### Returns

`Promise`\<`void`\>
