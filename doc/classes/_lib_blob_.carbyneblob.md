[carbyne](../README.md) > ["lib/blob"](../modules/_lib_blob_.md) > [CarbyneBlob](../classes/_lib_blob_.carbyneblob.md)

# Class: CarbyneBlob

## Hierarchy

**CarbyneBlob**

## Implements

* [ICarbyneCustomObject](../interfaces/_lib_types_.icarbynecustomobject.md)

## Index

### Constructors

* [constructor](_lib_blob_.carbyneblob.md#constructor)

### Properties

* [_id](_lib_blob_.carbyneblob.md#_id)
* [data](_lib_blob_.carbyneblob.md#data)

### Methods

* [copy](_lib_blob_.carbyneblob.md#copy)
* [serialize](_lib_blob_.carbyneblob.md#serialize)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CarbyneBlob**(data: *`Buffer`*, _id?: * `undefined` &#124; `string`*): [CarbyneBlob](_lib_blob_.carbyneblob.md)

*Defined in lib/blob.ts:4*

**Parameters:**

| Param | Type |
| ------ | ------ |
| data | `Buffer` |
| `Optional` _id |  `undefined` &#124; `string`|

**Returns:** [CarbyneBlob](_lib_blob_.carbyneblob.md)

___

## Properties

<a id="_id"></a>

###  _id

**● _id**: *`any`*

*Implementation of [ICarbyneCustomObject](../interfaces/_lib_types_.icarbynecustomobject.md).[_id](../interfaces/_lib_types_.icarbynecustomobject.md#_id)*

*Defined in lib/blob.ts:4*

___
<a id="data"></a>

### `<Protected>` data

**● data**: *`Buffer`*

*Defined in lib/blob.ts:7*

___

## Methods

<a id="copy"></a>

###  copy

▸ **copy**(): `Promise`<[CarbyneBlob](_lib_blob_.carbyneblob.md)>

*Defined in lib/blob.ts:23*

**Returns:** `Promise`<[CarbyneBlob](_lib_blob_.carbyneblob.md)>

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<`Buffer`>

*Implementation of [ICarbyneCustomObject](../interfaces/_lib_types_.icarbynecustomobject.md).[serialize](../interfaces/_lib_types_.icarbynecustomobject.md#serialize)*

*Defined in lib/blob.ts:19*

**Returns:** `Promise`<`Buffer`>

___

