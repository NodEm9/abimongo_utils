[**abimongo_utils v1.1.0**](../README.md)

***

[abimongo_utils](../README.md) / retryWithBackoff

# Function: retryWithBackoff()

> **retryWithBackoff**\<`T`\>(`fn`, `retries`, `delayMs`, `backoffFactor`): `Promise`\<`T`\>

Defined in: [utils/retry/retryWithBackoff.ts:1](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/utils/retry/retryWithBackoff.ts#L1)

## Type Parameters

### T

`T`

## Parameters

### fn

() => `Promise`\<`T`\>

### retries

`number` = `5`

### delayMs

`number` = `500`

### backoffFactor

`number` = `2`

## Returns

`Promise`\<`T`\>
