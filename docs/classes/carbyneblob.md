[carbyne-db](../README.md) > [CarbyneBlob](../classes/carbyneblob.md)

# Class: CarbyneBlob

Our own custom object. Blobs have absolutely _no_ special handling, and Carbyne treats them just like any other custom object. [Carbyne.registerCustomObject](carbyne.md#registercustomobject) can be used to register your own custom objects.

## Hierarchy

**CarbyneBlob**

## Implements

* [ICarbyneCustomObject](../interfaces/icarbynecustomobject.md)

## Index

### Constructors

* [constructor](carbyneblob.md#constructor)

### Properties

* [_id](carbyneblob.md#_id)
* [data](carbyneblob.md#data)

### Methods

* [copy](carbyneblob.md#copy)
* [serialize](carbyneblob.md#serialize)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CarbyneBlob**(data: *`Buffer`*, _id?: * `undefined` &#124; `string`*): [CarbyneBlob](carbyneblob.md)

*Defined in [lib/blob.ts:10](https://github.com/allotropelabs/carbyne/blob/1dacc52/lib/blob.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| data | `Buffer` |
| `Optional` _id |  `undefined` &#124; `string`|

**Returns:** [CarbyneBlob](carbyneblob.md)

___

## Properties

<a id="_id"></a>

###  _id

**● _id**: *`any`*

*Implementation of [ICarbyneCustomObject](../interfaces/icarbynecustomobject.md).[_id](../interfaces/icarbynecustomobject.md#_id)*

*Defined in [lib/blob.ts:10](https://github.com/allotropelabs/carbyne/blob/1dacc52/lib/blob.ts#L10)*

___
<a id="data"></a>

### `<Protected>` data

**● data**: *`Buffer`*

*Defined in [lib/blob.ts:13](https://github.com/allotropelabs/carbyne/blob/1dacc52/lib/blob.ts#L13)*

___

## Methods

<a id="copy"></a>

###  copy

▸ **copy**(): `Promise`<[CarbyneBlob](carbyneblob.md)>

*Defined in [lib/blob.ts:45](https://github.com/allotropelabs/carbyne/blob/1dacc52/lib/blob.ts#L45)*

Copies this `CarbyneBlob`, returning a new one representing a copy of the same data.

Equivalent to:

```typescript
const newBuffer = Buffer.from ( [] )

this.data.copy ( newBuffer )

return new CarbyneBlob ( newBuffer )
```

**Returns:** `Promise`<[CarbyneBlob](carbyneblob.md)>

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<`Buffer`>

*Implementation of [ICarbyneCustomObject](../interfaces/icarbynecustomobject.md).[serialize](../interfaces/icarbynecustomobject.md#serialize)*

*Defined in [lib/blob.ts:25](https://github.com/allotropelabs/carbyne/blob/1dacc52/lib/blob.ts#L25)*

**Returns:** `Promise`<`Buffer`>

___

