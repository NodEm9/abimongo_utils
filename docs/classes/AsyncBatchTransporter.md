[**abimongo_utils v1.1.0**](../README.md)

***

[abimongo_utils](../README.md) / AsyncBatchTransporter

# Class: AsyncBatchTransporter

Defined in: [transports/async-batch.transporter.ts:11](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/async-batch.transporter.ts#L11)

## Constructors

### Constructor

> **new AsyncBatchTransporter**(`options`): `AsyncBatchTransporter`

Defined in: [transports/async-batch.transporter.ts:19](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/async-batch.transporter.ts#L19)

#### Parameters

##### options

[`AsyncBatchTransporterOptions`](../interfaces/AsyncBatchTransporterOptions.md) & `object`

#### Returns

`AsyncBatchTransporter`

## Methods

### flush()

> **flush**(): `Promise`\<`void`\>

Defined in: [transports/async-batch.transporter.ts:44](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/async-batch.transporter.ts#L44)

#### Returns

`Promise`\<`void`\>

***

### log()

> **log**(`level`, `message`, `meta`): `void`

Defined in: [transports/async-batch.transporter.ts:28](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/async-batch.transporter.ts#L28)

#### Parameters

##### level

[`LogLevel`](../type-aliases/LogLevel.md)

##### message

`string`

##### meta

`any`[]

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [transports/async-batch.transporter.ts:60](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/async-batch.transporter.ts#L60)

#### Returns

`void`
