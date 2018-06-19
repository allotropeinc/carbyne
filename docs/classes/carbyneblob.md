[carbyne-db](../README.md) > [CarbyneBlob](../classes/carbyneblob.md)

# Class: CarbyneBlob

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

*Defined in [lib/blob.ts:4](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/blob.ts#L4)*

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

*Defined in [lib/blob.ts:4](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/blob.ts#L4)*

___
<a id="data"></a>

### `<Protected>` data

**● data**: *`Buffer`*

*Defined in [lib/blob.ts:7](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/blob.ts#L7)*

___

## Methods

<a id="copy"></a>

###  copy

▸ **copy**(): `Promise`<[CarbyneBlob](carbyneblob.md)>

*Defined in [lib/blob.ts:23](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/blob.ts#L23)*

**Returns:** `Promise`<[CarbyneBlob](carbyneblob.md)>

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<`Buffer`>

*Implementation of [ICarbyneCustomObject](../interfaces/icarbynecustomobject.md).[serialize](../interfaces/icarbynecustomobject.md#serialize)*

*Defined in [lib/blob.ts:19](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/blob.ts#L19)*

**Returns:** `Promise`<`Buffer`>

___

