[carbyne-db](../README.md) > [ICarbyneCustomObject](../interfaces/icarbynecustomobject.md)

# Interface: ICarbyneCustomObject

## Hierarchy

**ICarbyneCustomObject**

## Implemented by

* [CarbyneBlob](../classes/carbyneblob.md)

## Index

### Properties

* [_id](icarbynecustomobject.md#_id)

### Methods

* [serialize](icarbynecustomobject.md#serialize)

---

## Properties

<a id="_id"></a>

###  _id

**● _id**: * `string` &#124; `undefined`
*

*Defined in [lib/types.ts:211](https://github.com/allotropelabs/carbyne/blob/dcbec49/lib/types.ts#L211)*

___

## Methods

<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<`any`>

*Defined in [lib/types.ts:217](https://github.com/allotropelabs/carbyne/blob/dcbec49/lib/types.ts#L217)*

Serialize this custom object, return an object that can be passed to MessagePack.

**Returns:** `Promise`<`any`>

___

