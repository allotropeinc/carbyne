[carbyne-db](../README.md) > [ICarbyneCustomObject](../interfaces/icarbynecustomobject.md)

# Interface: ICarbyneCustomObject

A custom object. See [Carbyne.registerCustomObject](../classes/carbyne.md#registercustomobject).

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

*Defined in [lib/types.ts:379](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/types.ts#L379)*

The ID of this custom object. Undefined if it hasn't been recoreded in the database yet.

___

## Methods

<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<`any`>

*Defined in [lib/types.ts:387](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/types.ts#L387)*

Serialize this custom object, return an object that can be passed to MessagePack.

**Returns:** `Promise`<`any`>

___

