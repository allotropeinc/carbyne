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

*Defined in [lib/stores/directory.ts:12](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L12)*

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

*Defined in [lib/stores/directory.ts:12](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L12)*

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(newRoot?: *`any`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[clear](../interfaces/icarbynestore.md#clear)*

*Defined in [lib/stores/directory.ts:58](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` newRoot | `any` |

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[genID](../interfaces/icarbynestore.md#genid)*

*Defined in [lib/stores/directory.ts:63](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L63)*

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getData](../interfaces/icarbynestore.md#getdata)*

*Defined in [lib/stores/directory.ts:206](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L206)*

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

*Defined in [lib/stores/directory.ts:138](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L138)*

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

*Defined in [lib/stores/directory.ts:188](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L188)*

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

*Defined in [lib/stores/directory.ts:184](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L184)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`number`>

___
<a id="getobjectdir"></a>

### `<Protected>` getObjectDir

▸ **getObjectDir**(id: *`string`*): `Promise`<`string`>

*Defined in [lib/stores/directory.ts:43](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L43)*

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

*Defined in [lib/stores/directory.ts:174](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L174)*

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

*Defined in [lib/stores/directory.ts:195](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L195)*

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

*Defined in [lib/stores/directory.ts:217](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L217)*

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

*Defined in [lib/stores/directory.ts:153](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L153)*

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

*Defined in [lib/stores/directory.ts:67](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L67)*

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

*Defined in [lib/stores/directory.ts:25](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L25)*

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

*Defined in [lib/stores/directory.ts:34](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/directory.ts#L34)*

Unpacks an object encoded in a packed format.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buf | `Buffer` |  - |

**Returns:** `Promise`<`any`>

___

