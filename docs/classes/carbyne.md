[carbyne-db](../README.md) > [Carbyne](../classes/carbyne.md)

# Class: Carbyne

The representation of a Carbyne database.

Example:

```typescript
import { Carbyne, CarbyneMemoryStore } from 'carbyne-db'

const db = new Carbyne ( new CarbyneMemoryStore () )
```

## Hierarchy

**Carbyne**

## Index

### Constructors

* [constructor](carbyne.md#constructor)

### Properties

* [customObjects](carbyne.md#customobjects)
* [deserializeCache](carbyne.md#deserializecache)
* [serializeCache](carbyne.md#serializecache)
* [store](carbyne.md#store)
* [symbolIds](carbyne.md#symbolids)

### Methods

* [clear](carbyne.md#clear)
* [deserialize](carbyne.md#deserialize)
* [getData](carbyne.md#getdata)
* [getKey](carbyne.md#getkey)
* [getType](carbyne.md#gettype)
* [push](carbyne.md#push)
* [registerCustomObject](carbyne.md#registercustomobject)
* [serialize](carbyne.md#serialize)
* [setData](carbyne.md#setdata)
* [setKey](carbyne.md#setkey)
* [toObject](carbyne.md#toobject)
* [fromObject](carbyne.md#fromobject)
* [getValue](carbyne.md#getvalue)
* [resolveId](carbyne.md#resolveid)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Carbyne**(store?: *[ICarbyneStore](../interfaces/icarbynestore.md)*): [Carbyne](carbyne.md)

*Defined in lib/carbyne.ts:128*

Create the database.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` store | [ICarbyneStore](../interfaces/icarbynestore.md) |  The store to use for the database. |

**Returns:** [Carbyne](carbyne.md)

___

## Properties

<a id="customobjects"></a>

### `<Protected>` customObjects

**● customObjects**: *`object`*

*Defined in lib/carbyne.ts:128*

The registry of custom objects the database can use.

#### Type declaration

[name: `string`]: [ICarbyneCustomObjectConstructor](../interfaces/icarbynecustomobjectconstructor.md)

___
<a id="deserializecache"></a>

### `<Protected>` deserializeCache

**● deserializeCache**: *[ICarbyneDesCache](../interfaces/icarbynedescache.md)*

*Defined in lib/carbyne.ts:113*

The cache of deserialized items that are used to protect against infinite recursion and copies.

___
<a id="serializecache"></a>

### `<Protected>` serializeCache

**● serializeCache**: *[ICarbyneCache](../interfaces/icarbynecache.md)*

*Defined in lib/carbyne.ts:107*

The cache of serialized items that are used to protect against infinite recursion and copies.

___
<a id="store"></a>

### `<Protected>` store

**● store**: *[ICarbyneStore](../interfaces/icarbynestore.md)*

*Defined in lib/carbyne.ts:123*

The `ICarbyneStore` currently in use by the database.

___
<a id="symbolids"></a>

### `<Protected>` symbolIds

**● symbolIds**: *`any`*

*Defined in lib/carbyne.ts:118*

Used so we don't make unnecessary copies of symbols with the same ID.

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(newObj?: *`any`*): `Promise`<`void`>

*Defined in lib/carbyne.ts:480*

Clears the database, immediately and irreversibly dropping all data. `newObj` is optional and specifies what you want ID `'root'` to be replaced with. Defaults to empty object (`{}`)

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` newObj | `any` |

**Returns:** `Promise`<`void`>

___
<a id="deserialize"></a>

### `<Protected>` deserialize

▸ **deserialize**(obj: * `string` &#124; [TCarbyneValue](../#tcarbynevalue)*): `Promise`<`any`>

*Defined in lib/carbyne.ts:363*

Deserializes an object specified by ID into storage. Utilizes recursion and caching to support circular references and references to past deserialized objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj |  `string` &#124; [TCarbyneValue](../#tcarbynevalue)|  The \`string\` ID or \`TCarbyneValue\` value to deserialize. |

**Returns:** `Promise`<`any`>
The deserialized object.

___
<a id="getdata"></a>

###  getData

▸ **getData**(obj: *`any`*): `Promise`<`any`>

*Defined in lib/carbyne.ts:639*

Gets the data of `obj`. `obj` can be an ID, reference, or deserialized object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to target. |

**Returns:** `Promise`<`any`>
The data of `obj`.

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(obj: *`any`*, key: * `string` &#124; `number`*): `Promise`< `object` &#124; `object`>

*Defined in lib/carbyne.ts:569*

Gets the key `key` of object `obj` and returns it.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object or ID to target. |
| key |  `string` &#124; `number`|  - |

**Returns:** `Promise`< `object` &#124; `object`>

___
<a id="gettype"></a>

### `<Protected>` getType

▸ **getType**(obj: *`any`*): `Promise`< [TCarbyneTypeExt](../#tcarbynetypeext) &#124; `string`>

*Defined in lib/carbyne.ts:159*

Gets the type of an object. This is used internally by `serialize()` to figure out what to store objects as.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to get the type of. |

**Returns:** `Promise`< [TCarbyneTypeExt](../#tcarbynetypeext) &#124; `string`>
Returns `TCarbyneTypeExt` if
it's a recognized type, or `string` if it's a custom type.

___
<a id="push"></a>

###  push

▸ **push**(obj: *`any`*, value: * `string` &#124; `number`*): `Promise`<`void`>

*Defined in lib/carbyne.ts:587*

Pushes `value` to array `obj`. Works with objects too, I guess. It honestly doesn't care.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to target. |
| value |  `string` &#124; `number`|  The value to push to \`obj\`. |

**Returns:** `Promise`<`void`>

___
<a id="registercustomobject"></a>

###  registerCustomObject

▸ **registerCustomObject**(name: *`string`*, cls: *[ICarbyneCustomObjectConstructor](../interfaces/icarbynecustomobjectconstructor.md)*): `Promise`<`void`>

*Defined in lib/carbyne.ts:651*

Registers a new custom object. `name` is the `type`, and `cls` is the class (not an instance of it).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name (type) of the new object. |
| cls | [ICarbyneCustomObjectConstructor](../interfaces/icarbynecustomobjectconstructor.md) |  The class to use. |

**Returns:** `Promise`<`void`>

___
<a id="serialize"></a>

### `<Protected>` serialize

▸ **serialize**(obj: *`any`*, id: *`string`*): `Promise`<[TCarbyneValue](../#tcarbynevalue)>

*Defined in lib/carbyne.ts:203*

Serializes an object into storage. Utilizes recursion and caching to support circular references and references to past serialized objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to serialize. Can be anything, honestly. |
| id | `string` |  The ID to give the new object. This is important. |

**Returns:** `Promise`<[TCarbyneValue](../#tcarbynevalue)>
The serialized object.

___
<a id="setdata"></a>

###  setData

▸ **setData**(obj: *`any`*, data: *`any`*): `Promise`<`void`>

*Defined in lib/carbyne.ts:616*

Sets the data of `obj` to `data`. Only use on custom objects. `obj` can be an ID, reference, or deserialized object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The ID or object to target. |
| data | `any` |  The data to set the object to. |

**Returns:** `Promise`<`void`>

___
<a id="setkey"></a>

###  setKey

▸ **setKey**(obj: *`any`*, key: * `string` &#124; `number`*, value: *`any`*): `Promise`<`void`>

*Defined in lib/carbyne.ts:509*

Sets the key `key` of object `obj` to `value`. Pretty self-explanatory.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object or ID to target. |
| key |  `string` &#124; `number`|  The key to target. |
| value | `any` |  The value to set \`obj\[key\]\` to. |

**Returns:** `Promise`<`void`>

___
<a id="toobject"></a>

###  toObject

▸ **toObject**(obj?: *`any`*): `Promise`<`any`>

*Defined in lib/carbyne.ts:497*

Deserializes an object, specified by ID, value, or reference, and returns it.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` obj | `any` |  The object or ID to deserialize. Defaults to `'root'`. |

**Returns:** `Promise`<`any`>
The deserialized object.

___
<a id="fromobject"></a>

### `<Static>` fromObject

▸ **fromObject**(obj: *`any`*, store?: *[ICarbyneStore](../interfaces/icarbynestore.md)*): `Promise`<[Carbyne](carbyne.md)>

*Defined in lib/carbyne.ts:458*

Creates a Carbyne model from an object. Be advised this does wipe the database.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to use as ID `'root'`. |
| `Optional` store | [ICarbyneStore](../interfaces/icarbynestore.md) |  The store to use. Defaults to \`CarbyneMemoryStore\`. |

**Returns:** `Promise`<[Carbyne](carbyne.md)>

___
<a id="getvalue"></a>

### `<Static>``<Protected>` getValue

▸ **getValue**(value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`any`>

*Defined in lib/carbyne.ts:327*

Converts a `TCarbyneValue` into its primitive counterpart. Does not support references, objects, arrays, Symbols, or custom objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [TCarbyneValue](../#tcarbynevalue) |  The value to convert. |

**Returns:** `Promise`<`any`>
The new primitive after conversion.

___
<a id="resolveid"></a>

### `<Static>``<Protected>` resolveId

▸ **resolveId**(obj: *`any`*): `Promise`<`string`>

*Defined in lib/carbyne.ts:548*

Resolves the ID of `obj`. Can take strings, references, and deserialized objects too.
*__throws__*: {TypeError} If the object does not exist in the database.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to resolve. |

**Returns:** `Promise`<`string`>
The resolved ID.

___

