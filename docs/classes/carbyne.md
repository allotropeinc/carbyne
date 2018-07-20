[carbyne-db](../README.md) > [Carbyne](../classes/carbyne.md)

# Class: Carbyne

The representation of a Carbyne database.

Example:

```typescript
import { Carbyne, CarbyneMemoryStore } from 'carbyne-db'

const db = new Carbyne ( new CarbyneMemoryStore () )

// ...
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
* [delKey](carbyne.md#delkey)
* [deserialize](carbyne.md#deserialize)
* [getData](carbyne.md#getdata)
* [getKey](carbyne.md#getkey)
* [getKeys](carbyne.md#getkeys)
* [getKeysParallel](carbyne.md#getkeysparallel)
* [getLength](carbyne.md#getlength)
* [getRoot](carbyne.md#getroot)
* [getType](carbyne.md#gettype)
* [hasKey](carbyne.md#haskey)
* [push](carbyne.md#push)
* [registerCustomObject](carbyne.md#registercustomobject)
* [serialize](carbyne.md#serialize)
* [setData](carbyne.md#setdata)
* [setKey](carbyne.md#setkey)
* [setRoot](carbyne.md#setroot)
* [supportsKeys](carbyne.md#supportskeys)
* [toObject](carbyne.md#toobject)
* [fromObject](carbyne.md#fromobject)
* [getValue](carbyne.md#getvalue)
* [resolveId](carbyne.md#resolveid)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Carbyne**(store?: *[ICarbyneStore](../interfaces/icarbynestore.md)*): [Carbyne](carbyne.md)

*Defined in [lib/carbyne.ts:132](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L132)*

Create the database.

```typescript
import { Carbyne, CarbyneDirectoryStore } from 'carbyne-db'

const db = new Carbyne ( new CarbyneDirectoryStore ( 'test-db' ) )

// ...
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` store | [ICarbyneStore](../interfaces/icarbynestore.md) |  The store to use for the database. See [Carbyne.customObjects](carbyne.md#customobjects) and [Carbyne.registerCustomObject](carbyne.md#registercustomobject). |

**Returns:** [Carbyne](carbyne.md)

___

## Properties

<a id="customobjects"></a>

### `<Protected>` customObjects

**● customObjects**: *`object`*

*Defined in [lib/carbyne.ts:132](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L132)*

The registry of custom objects the database can use. Use [Carbyne.registerCustomObject](carbyne.md#registercustomobject) to add one of these.

#### Type declaration

[name: `string`]: [ICarbyneCustomObjectConstructor](../interfaces/icarbynecustomobjectconstructor.md)

___
<a id="deserializecache"></a>

### `<Protected>` deserializeCache

**● deserializeCache**: *[TCarbyneDesCache](../#tcarbynedescache)*

*Defined in [lib/carbyne.ts:115](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L115)*

The cache of deserialized items that are used to protect against infinite recursion and copies.

___
<a id="serializecache"></a>

### `<Protected>` serializeCache

**● serializeCache**: *[TCarbyneCache](../#tcarbynecache)*

*Defined in [lib/carbyne.ts:109](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L109)*

The cache of serialized items that are used to protect against infinite recursion and copies.

___
<a id="store"></a>

### `<Protected>` store

**● store**: *[ICarbyneStore](../interfaces/icarbynestore.md)*

*Defined in [lib/carbyne.ts:126](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L126)*

The [ICarbyneStore](../interfaces/icarbynestore.md) currently in use by the database. Pass this as an argument to [Carbyne.constructor](carbyne.md#constructor).

___
<a id="symbolids"></a>

### `<Protected>` symbolIds

**● symbolIds**: *`any`*

*Defined in [lib/carbyne.ts:120](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L120)*

Used so we don't make unnecessary copies of symbols with the same ID.

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(newRoot?: *`any`*): `Promise`<`void`>

*Defined in [lib/carbyne.ts:591](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L591)*

Clears the database, immediately and irreversibly dropping all data. `newRoot` is optional and specifies what you want ID `'root'` to be replaced with. Defaults to empty object (`{}`).

[Carbyne.fromObject](carbyne.md#fromobject) uses this. You can use this manually if you ever need to.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` newRoot | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="delkey"></a>

###  delKey

▸ **delKey**(obj: *`any`*, key: * `number` &#124; `string`*): `Promise`<`void`>

*Defined in [lib/carbyne.ts:774](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L774)*

This deletes the key `key` in object `obj`.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| key |  `number` &#124; `string`|  - |

**Returns:** `Promise`<`void`>

___
<a id="deserialize"></a>

### `<Protected>` deserialize

▸ **deserialize**(obj: * `string` &#124; [TCarbyneValue](../#tcarbynevalue)*): `Promise`<`any`>

*Defined in [lib/carbyne.ts:453](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L453)*

Deserializes an object specified by ID into storage. Utilizes recursion and caching to support circular references and references to past deserialized objects.

For example, if you have the [Carbyne.serialize](carbyne.md#serialize) example, it would output basically exactly what you put into it in that example (it would be a different object, though, but with the same data). Deserializing multiple times returns the same object, because of [Carbyne.deserializeCache](carbyne.md#deserializecache).

Note that, just like [Carbyne.serialize](carbyne.md#serialize), this is `protected` and you should call another method that uses it instead, such as [Carbyne.toObject](carbyne.md#toobject).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj |  `string` &#124; [TCarbyneValue](../#tcarbynevalue)|  The \`string\` ID or [TCarbyneValue](../#tcarbynevalue) value to deserialize. If it's a \`string\` ID, it's assumed you want the object that ID points to. |

**Returns:** `Promise`<`any`>
The deserialized object.

___
<a id="getdata"></a>

###  getData

▸ **getData**(obj: *`any`*): `Promise`<`any`>

*Defined in [lib/carbyne.ts:748](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L748)*

Gets the data of `obj`. `obj` can be an ID, reference, or deserialized object. Uses [Carbyne.resolveId](carbyne.md#resolveid).

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

*Defined in [lib/carbyne.ts:672](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L672)*

Gets the key `key` of object `obj` and returns it.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object or ID to target. |
| key |  `string` &#124; `number`|  - |

**Returns:** `Promise`< `object` &#124; `object`>

___
<a id="getkeys"></a>

###  getKeys

▸ **getKeys**(obj: *`any`*, keys: *( `string` &#124; `number`)[]*): `Promise`<`any`>

*Defined in [lib/carbyne.ts:891](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L891)*

Like [Carbyne.getKey](carbyne.md#getkey) but with less function nesting hell. This traverses, using `obj` as root, down the object using the keys `keys`. Turns this (`{root}.key.value[0]`):

```typescript
await db.getKey (
    await db.getKey (
        await db.getKey (
            'root',
            'key'
        ),
        'value'
    ),
    0
)
```

into this:

```typescript
await db.getKeys (
    'root',
    [
        'key',
        'value',
        0
    ]
)
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| keys | ( `string` &#124; `number`)[] |  - |

**Returns:** `Promise`<`any`>

___
<a id="getkeysparallel"></a>

###  getKeysParallel

▸ **getKeysParallel**(obj: *`any`*, keys: *( `string` &#124; `number`)[]*): `Promise`<( `object` &#124; `object`)[]>

*Defined in [lib/carbyne.ts:914](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L914)*

Returns an array of [TCarbyneValue](../#tcarbynevalue)s containing obj\[key\] for every `key` in `keys`. These are retrieved in parallel. Retrieves all keys from the same object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| keys | ( `string` &#124; `number`)[] |  - |

**Returns:** `Promise`<( `object` &#124; `object`)[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(obj: *`any`*): `Promise`<`number`>

*Defined in [lib/carbyne.ts:852](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L852)*

Returns the number of keys in `obj`. Only really useful with arrays.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |

**Returns:** `Promise`<`number`>

___
<a id="getroot"></a>

###  getRoot

▸ **getRoot**(): `Promise`<`object`>

*Defined in [lib/carbyne.ts:793](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L793)*

Returns a reference to the root object.

Equivalent to `return { type : 'reference', data : 'root' }`.

**Returns:** `Promise`<`object`>

___
<a id="gettype"></a>

### `<Protected>` getType

▸ **getType**(obj: *`any`*): `Promise`< [TCarbyneTypeExt](../#tcarbynetypeext) &#124; `string`>

*Defined in [lib/carbyne.ts:176](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L176)*

Gets the type of an object. This is used internally by `serialize()` to figure out what to store objects as.

```typescript
await db.getType ( 5 ) // 'number'
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to get the type of. |

**Returns:** `Promise`< [TCarbyneTypeExt](../#tcarbynetypeext) &#124; `string`>
Returns `TCarbyneTypeExt` if
it's a recognized type, or `string` if it's a custom type.

___
<a id="haskey"></a>

###  hasKey

▸ **hasKey**(obj: *`any`*, key: * `number` &#124; `string`*): `Promise`<`boolean`>

*Defined in [lib/carbyne.ts:808](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L808)*

Checks whether `obj` has the key `key`. Great for avoiding errors, since usually trying to access a key that doesn't exist throws a huge error.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| key |  `number` &#124; `string`|  - |

**Returns:** `Promise`<`boolean`>

___
<a id="push"></a>

###  push

▸ **push**(obj: *`any`*, value: *`any`*): `Promise`<`number`>

*Defined in [lib/carbyne.ts:691](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L691)*

Pushes `value` to array `obj`. Works with objects too, I guess. It honestly doesn't care. [ICarbyneStore.push](../interfaces/icarbynestore.md#push) basically just calls `await db.setKey ( await db.keys ( obj ).length, value )`.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to target. |
| value | `any` |  The value to push to \`obj\`. |

**Returns:** `Promise`<`number`>

___
<a id="registercustomobject"></a>

###  registerCustomObject

▸ **registerCustomObject**(name: *`string`*, cls: *[ICarbyneCustomObjectConstructor](../interfaces/icarbynecustomobjectconstructor.md)*): `Promise`<`void`>

*Defined in [lib/carbyne.ts:760](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L760)*

Registers a new custom object. `name` is the `type`, and `cls` is the class (not an instance of it). See [Carbyne.customObjects](carbyne.md#customobjects).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name (type) of the new object. |
| cls | [ICarbyneCustomObjectConstructor](../interfaces/icarbynecustomobjectconstructor.md) |  The class to use. |

**Returns:** `Promise`<`void`>

___
<a id="serialize"></a>

### `<Protected>` serialize

▸ **serialize**(obj: *`any`*, id: *`string`*, clearCache?: *`boolean`*): `Promise`<[TCarbyneValue](../#tcarbynevalue)>

*Defined in [lib/carbyne.ts:256](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L256)*

Serializes an object into storage. Utilizes recursion and caching to support circular references and references to past serialized objects.

```typescript
await db.serialize (
    {
        bool   : true,
        number : 42,
        null   : null
    },
    'root'
)
```

The example above would be serialized in a [CarbyneMemoryStore](carbynememorystore.md) as:

```json
{
    "bool": {
        "type": "bool",
        "data": true
    },
    "number": {
        "type": "number",
        "data": 42
    },
    "null": {
        "type": "null"
    }
}
```

Note that instead of using this method directly, which is `protected`, you should use [Carbyne.fromObject](carbyne.md#fromobject) instead. [Carbyne.setKey](carbyne.md#setkey) automatically serializes what you pass into it, so there is no need to manually do this.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| obj | `any` | - |  The object to serialize. Can be anything, honestly. |
| id | `string` | - |  The ID to give the new object. This is important. |
| `Default value` clearCache | `boolean` | true |  Whether to remove the ID being serialized from the cache. |

**Returns:** `Promise`<[TCarbyneValue](../#tcarbynevalue)>
The serialized object.

___
<a id="setdata"></a>

###  setData

▸ **setData**(obj: *`any`*, data: *`any`*): `Promise`<`void`>

*Defined in [lib/carbyne.ts:725](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L725)*

Sets the data of `obj` to `data`. Only use on custom objects. `obj` can be an ID, reference, or deserialized object. If you use this on non-custom objects, weird bugs may pop up and you may have a bad time.

This does not serialize data.

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

*Defined in [lib/carbyne.ts:619](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L619)*

Sets the key `key` of object `obj` to `value`. Pretty self-explanatory. This also sets the key of any current deserialized objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object or ID to target. |
| key |  `string` &#124; `number`|  The key to target. |
| value | `any` |  The value to set \`obj\[key\]\` to. |

**Returns:** `Promise`<`void`>

___
<a id="setroot"></a>

###  setRoot

▸ **setRoot**(obj: *`any`*): `Promise`<`void`>

*Defined in [lib/carbyne.ts:839](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L839)*

Sets the root of the database to `obj`. [Carbyne.clear](carbyne.md#clear) is preferred as it also cleans up orphaned objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="supportskeys"></a>

###  supportsKeys

▸ **supportsKeys**(obj: *`any`*): `Promise`<`boolean`>

*Defined in [lib/carbyne.ts:826](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L826)*

Checks if an object supports keys, such as [Carbyne.getKey](carbyne.md#getkey) and [Carbyne.setKey](carbyne.md#setkey). Useful for checking if, for example, `'root'` exists and is usable (it is not on initialization).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to check. |

**Returns:** `Promise`<`boolean`>
Whether the object supports keys.

___
<a id="toobject"></a>

###  toObject

▸ **toObject**(obj?: *`any`*): `Promise`<`any`>

*Defined in [lib/carbyne.ts:606](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L606)*

Deserializes an object, specified by ID, value, or reference, and returns it. This uses [Carbyne.deserialize](carbyne.md#deserialize) internally.

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

*Defined in [lib/carbyne.ts:570](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L570)*

Creates a Carbyne model from an object. This does wipe the database in the case of a [CarbyneDirectoryStore](carbynedirectorystore.md), so be careful. It would be advised to check the directory first for files to make sure it's empty before calling this function.

This is equivalent to the code:

```typescript
const db = new Carbyne ( store )
await db.clear ( obj )

return db
```

because that is the real source code of the function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to use as ID `'root'`. |
| `Optional` store | [ICarbyneStore](../interfaces/icarbynestore.md) |  The store to use. Defaults to [CarbyneMemoryStore](carbynememorystore.md) like [Carbyne.constructor](carbyne.md#constructor). |

**Returns:** `Promise`<[Carbyne](carbyne.md)>

___
<a id="getvalue"></a>

### `<Static>``<Protected>` getValue

▸ **getValue**(value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`any`>

*Defined in [lib/carbyne.ts:406](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L406)*

Converts a [TCarbyneValue](../#tcarbynevalue) into its primitive counterpart. Note that this function doesn't support primitives, objects, arrays, Symbols, or custom objects. Basically, it converts this:

```json
{
    "type": "number",
    "data": 42
}
```

to, for example, `42` in this case.

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

*Defined in [lib/carbyne.ts:651](https://github.com/allotropelabs/carbyne/blob/ec3ac00/lib/carbyne.ts#L651)*

Resolves the ID of `obj`. Can take strings, references, and deserialized objects too. This is used by internal [Carbyne](carbyne.md) functions to allow you to pass anything from strings to deserialized objects to methods like [Carbyne.getKey](carbyne.md#getkey) or [Carbyne.setKey](carbyne.md#setkey).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  The object to resolve. |

**Returns:** `Promise`<`string`>
The resolved ID.

___

