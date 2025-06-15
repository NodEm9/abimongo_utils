[**abimongo_utils v0.3.5**](../README.md)

***

[abimongo_utils](../README.md) / retryWithBackoff

# Function: retryWithBackoff()

> **retryWithBackoff**\<`T`\>(`fn`, `retries`, `delayMs`, `backoffFactor`): `Promise`\<`T`\>

Defined in: [utils/retry/retryWithBackoff.ts:1](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/utils/retry/retryWithBackoff.ts#L1)

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
