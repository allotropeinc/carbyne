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
* [delKey](icarbynestore.md#delkey)
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

*Defined in [lib/types.ts:226](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L226)*

Clears the database, immediately and irreversibly dropping all data. `newRoot` is optional and specifies what you want ID `'root'` to be replaced with. Defaults to empty object (`{}`).

[Carbyne.fromObject](../classes/carbyne.md#fromobject) uses this. You can use this manually if you ever need to.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` newRoot | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="delkey"></a>

###  delKey

▸ **delKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`void`>

*Defined in [lib/types.ts:281](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L281)*

Deletes a key from an object. This is used by [Carbyne.delKey](../classes/carbyne.md#delkey).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| key |  `number` &#124; `string`|  - |

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Defined in [lib/types.ts:234](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L234)*

Generates a new ID to use for objects. The default implementation simply calls `uuid.v4 ()` and calls it a day.

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Defined in [lib/types.ts:330](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L330)*

Gets the data of a custom object. This is used by [Carbyne.getData](../classes/carbyne.md#getdata).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<[TCarbyneValue](../#tcarbynevalue)>

*Defined in [lib/types.ts:255](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L255)*

Gets the value of a key in an object. This is used by [Carbyne.getKey](../classes/carbyne.md#getkey).

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

*Defined in [lib/types.ts:311](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L311)*

Gets the keys of an object specified by ID. This is used by [Carbyne.deserialize](../classes/carbyne.md#deserialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`number`>

*Defined in [lib/types.ts:302](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L302)*

Gets the length of an array specified by ID. This is used by [Carbyne.deserialize](../classes/carbyne.md#deserialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`number`>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

*Defined in [lib/types.ts:293](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L293)*

Gets the type of an object specified by ID. This is used by [Carbyne.deserialize](../classes/carbyne.md#deserialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/types.ts:319](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L319)*

Pushes an object to an array. This is used by [Carbyne.push](../classes/carbyne.md#push).

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

*Defined in [lib/types.ts:339](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L339)*

Sets the data of a custom object. This is used by [Carbyne.setData](../classes/carbyne.md#setdata).

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

*Defined in [lib/types.ts:268](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L268)*

Sets the value of a key in an object. This is used by [Carbyne.setKey](../classes/carbyne.md#setkey).

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

*Defined in [lib/types.ts:243](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/types.ts#L243)*

Sets a reference by ID. This is used by [Carbyne.serialize](../classes/carbyne.md#serialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| obj | `any` |  - |

**Returns:** `Promise`<`void`>

___

