[carbyne-db](../README.md) > [CarbyneDirectoryStore](../classes/carbynedirectorystore.md)

# Class: CarbyneDirectoryStore

## Hierarchy

**CarbyneDirectoryStore**

## Implements

* [ICarbyneStore](../interfaces/icarbynestore.md)

## Index

### Constructors

* [constructor](carbynedirectorystore.md#constructor)

### Properties

* [dirName](carbynedirectorystore.md#dirname)

### Methods

* [clear](carbynedirectorystore.md#clear)
* [delKey](carbynedirectorystore.md#delkey)
* [genID](carbynedirectorystore.md#genid)
* [getData](carbynedirectorystore.md#getdata)
* [getKey](carbynedirectorystore.md#getkey)
* [getKeys](carbynedirectorystore.md#getkeys)
* [getLength](carbynedirectorystore.md#getlength)
* [getObjectDir](carbynedirectorystore.md#getobjectdir)
* [getType](carbynedirectorystore.md#gettype)
* [push](carbynedirectorystore.md#push)
* [setData](carbynedirectorystore.md#setdata)
* [setKey](carbynedirectorystore.md#setkey)
* [setRef](carbynedirectorystore.md#setref)
* [pack](carbynedirectorystore.md#pack)
* [unpack](carbynedirectorystore.md#unpack)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CarbyneDirectoryStore**(dirName: *`string`*): [CarbyneDirectoryStore](carbynedirectorystore.md)

*Defined in [lib/stores/directory.ts:12](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| dirName | `string` |

**Returns:** [CarbyneDirectoryStore](carbynedirectorystore.md)

___

## Properties

<a id="dirname"></a>

### `<Protected>` dirName

**● dirName**: *`string`*

*Defined in [lib/stores/directory.ts:12](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L12)*

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[clear](../interfaces/icarbynestore.md#clear)*

*Defined in [lib/stores/directory.ts:58](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L58)*

**Returns:** `Promise`<`void`>

___
<a id="delkey"></a>

###  delKey

▸ **delKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[delKey](../interfaces/icarbynestore.md#delkey)*

*Defined in [lib/stores/directory.ts:231](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L231)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[genID](../interfaces/icarbynestore.md#genid)*

*Defined in [lib/stores/directory.ts:62](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L62)*

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getData](../interfaces/icarbynestore.md#getdata)*

*Defined in [lib/stores/directory.ts:207](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L207)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getKey](../interfaces/icarbynestore.md#getkey)*

*Defined in [lib/stores/directory.ts:139](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L139)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|

**Returns:** `Promise`<`any`>

___
<a id="getkeys"></a>

###  getKeys

▸ **getKeys**(id: *`string`*): `Promise`<`string`[]>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getKeys](../interfaces/icarbynestore.md#getkeys)*

*Defined in [lib/stores/directory.ts:189](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L189)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`number`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getLength](../interfaces/icarbynestore.md#getlength)*

*Defined in [lib/stores/directory.ts:185](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L185)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`number`>

___
<a id="getobjectdir"></a>

### `<Protected>` getObjectDir

▸ **getObjectDir**(id: *`string`*): `Promise`<`string`>

*Defined in [lib/stores/directory.ts:43](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L43)*

Gets the directory an object is stored in.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`string`>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`< "symbol" &#124; "object" &#124; "array">

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getType](../interfaces/icarbynestore.md#gettype)*

*Defined in [lib/stores/directory.ts:175](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L175)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`< "symbol" &#124; "object" &#124; "array">

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[push](../interfaces/icarbynestore.md#push)*

*Defined in [lib/stores/directory.ts:196](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L196)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| value | [TCarbyneValue](../#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/stores/directory.ts:218](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L218)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| value | [TCarbyneValue](../#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setkey"></a>

###  setKey

▸ **setKey**(id: *`string`*, key: * `number` &#124; `string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[setKey](../interfaces/icarbynestore.md#setkey)*

*Defined in [lib/stores/directory.ts:154](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L154)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|
| value | [TCarbyneValue](../#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setref"></a>

###  setRef

▸ **setRef**(id: *`string`*, obj: *`any`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[setRef](../interfaces/icarbynestore.md#setref)*

*Defined in [lib/stores/directory.ts:66](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| obj | `any` |

**Returns:** `Promise`<`void`>

___
<a id="pack"></a>

### `<Static>``<Protected>` pack

▸ **pack**(obj: *`any`*): `Promise`<`Buffer`>

*Defined in [lib/stores/directory.ts:25](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L25)*

Packs an object into a packed format for storage.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |

**Returns:** `Promise`<`Buffer`>

___
<a id="unpack"></a>

### `<Static>``<Protected>` unpack

▸ **unpack**(buf: *`Buffer`*): `Promise`<`any`>

*Defined in [lib/stores/directory.ts:34](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/stores/directory.ts#L34)*

Unpacks an object encoded in a packed format.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buf | `Buffer` |  - |

**Returns:** `Promise`<`any`>

___

