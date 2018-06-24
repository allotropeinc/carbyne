[carbyne-db](../README.md) > [ICarbyneCustomObjectConstructor](../interfaces/icarbynecustomobjectconstructor.md)

# Interface: ICarbyneCustomObjectConstructor

The constructor for a [ICarbyneCustomObject](icarbynecustomobject.md).

## Hierarchy

**ICarbyneCustomObjectConstructor**

## Index

### Constructors

* [constructor](icarbynecustomobjectconstructor.md#constructor)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ICarbyneCustomObjectConstructor**(data: *`any`*, _id?: * `undefined` &#124; `string`*): [ICarbyneCustomObject](icarbynecustomobject.md)

*Defined in [lib/types.ts:384](https://github.com/allotropelabs/carbyne/blob/884ad5c/lib/types.ts#L384)*

Create a custom object from the object `data`. `_id` is optional, and basically specifies, if the custom object is recorded in the database, _where_ it's recorded.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  - |
| `Optional` _id |  `undefined` &#124; `string`|  - |

**Returns:** [ICarbyneCustomObject](icarbynecustomobject.md)

___

