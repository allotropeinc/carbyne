[carbyne-db](../README.md) > [ICarbyneStore](../interfaces/icarbynestore.md)

# Interface: ICarbyneStore

The interface you need to implement in a class passed to [Carbyne.constructor](../classes/carbyne.md#constructor).

## Hierarchy

**ICarbyneStore**

## Implemented by

* [CarbyneDirectoryStore](../classes/carbynedirectorystore.md)
* [CarbyneMemoryStore](../classes/carbynememorystore.md)

## Index

### Methods

* [clear](icarbynestore.md#clear)
* [genID](icarbynestore.md#genid)
* [getData](icarbynestore.md#getdata)
* [getKey](icarbynestore.md#getkey)
* [getKeys](icarbynestore.md#getkeys)
* [getLength](icarbynestore.md#getlength)
* [getType](icarbynestore.md#gettype)
* [push](icarbynestore.md#push)
* [setData](icarbynestore.md#setdata)
* [setKey](icarbynestore.md#setkey)
* [setRef](icarbynestore.md#setref)

---

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(newRoot?: *`any`*): `Promise`<`void`>

*Defined in [lib/types.ts:169](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L169)*

Clears the database of any data, setting the root to `newRoot` or {} (empty object).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` newRoot | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Defined in [lib/types.ts:176](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L176)*

Gets a new ID to use for objects.

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Defined in [lib/types.ts:257](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L257)*

Gets the data of a custom object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<[TCarbyneValue](../#tcarbynevalue)>

*Defined in [lib/types.ts:197](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L197)*

Gets the value of a key in an object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| key |  `number` &#124; `string`|  - |

**Returns:** `Promise`<[TCarbyneValue](../#tcarbynevalue)>

___
<a id="getkeys"></a>

###  getKeys

▸ **getKeys**(id: *`string`*): `Promise`<`string`[]>

*Defined in [lib/types.ts:238](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L238)*

Gets the keys of an object specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`number`>

*Defined in [lib/types.ts:230](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L230)*

Gets the length of an array specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`number`>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

*Defined in [lib/types.ts:222](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L222)*

Gets the type of an object specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/types.ts:246](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L246)*

Pushes an object to an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| value | [TCarbyneValue](../#tcarbynevalue) |   |

**Returns:** `Promise`<`void`>

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, data: *`any`*): `Promise`<`void`>

*Defined in [lib/types.ts:266](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L266)*

Sets the data of a custom object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| data | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="setkey"></a>

###  setKey

▸ **setKey**(id: *`string`*, key: * `number` &#124; `string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/types.ts:210](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L210)*

Sets the value of a key in an object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| key |  `number` &#124; `string`|  - |
| value | [TCarbyneValue](../#tcarbynevalue) |  - |

**Returns:** `Promise`<`void`>

___
<a id="setref"></a>

###  setRef

▸ **setRef**(id: *`string`*, obj: *`any`*): `Promise`<`void`>

*Defined in [lib/types.ts:185](https://github.com/allotropelabs/carbyne/blob/f80c702/lib/types.ts#L185)*

Sets a reference by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| obj | `any` |  - |

**Returns:** `Promise`<`void`>

___

