[**abimongo_utils v0.3.5**](../README.md)

***

[abimongo_utils](../README.md) / AsyncBatchTransporter

# Class: AsyncBatchTransporter

Defined in: [transports/async-batch.transporter.ts:11](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/async-batch.transporter.ts#L11)

## Constructors

### Constructor

> **new AsyncBatchTransporter**(`options`): `AsyncBatchTransporter`

Defined in: [transports/async-batch.transporter.ts:18](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/async-batch.transporter.ts#L18)

#### Parameters

##### options

[`AsyncBatchTransporterOptions`](../interfaces/AsyncBatchTransporterOptions.md)

#### Returns

`AsyncBatchTransporter`

## Methods

### flush()

> **flush**(): `Promise`\<`void`\>

Defined in: [transports/async-batch.transporter.ts:41](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/async-batch.transporter.ts#L41)

#### Returns

`Promise`\<`void`\>

***

### log()

> **log**(`level`, `message`, `meta`): `void`

Defined in: [transports/async-batch.transporter.ts:26](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/async-batch.transporter.ts#L26)

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

Defined in: [transports/async-batch.transporter.ts:57](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/async-batch.transporter.ts#L57)

#### Returns

`void`
