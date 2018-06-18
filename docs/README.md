
#  carbyne-db

## Index

### Classes

* [Carbyne](classes/carbyne.md)
* [CarbyneBlob](classes/carbyneblob.md)
* [CarbyneDirectoryStore](classes/carbynedirectorystore.md)
* [CarbyneMemoryStore](classes/carbynememorystore.md)

### Interfaces

* [ICarbyneCache](interfaces/icarbynecache.md)
* [ICarbyneCustomObject](interfaces/icarbynecustomobject.md)
* [ICarbyneCustomObjectConstructor](interfaces/icarbynecustomobjectconstructor.md)
* [ICarbyneDesCache](interfaces/icarbynedescache.md)
* [ICarbyneMemoryModel](interfaces/icarbynememorymodel.md)
* [ICarbyneRefArray](interfaces/icarbynerefarray.md)
* [ICarbyneRefObject](interfaces/icarbynerefobject.md)
* [ICarbyneRefSymbol](interfaces/icarbynerefsymbol.md)
* [ICarbyneStore](interfaces/icarbynestore.md)

### Type aliases

* [TCarbyneDesArray](#tcarbynedesarray)
* [TCarbyneDesCached](#tcarbynedescached)
* [TCarbyneDesObject](#tcarbynedesobject)
* [TCarbyneRef](#tcarbyneref)
* [TCarbyneRefInternal](#tcarbynerefinternal)
* [TCarbyneRefs](#tcarbynerefs)
* [TCarbyneTypeExt](#tcarbynetypeext)
* [TCarbyneTypeGeneral](#tcarbynetypegeneral)
* [TCarbyneTypeImplicit](#tcarbynetypeimplicit)
* [TCarbyneTypeObj](#tcarbynetypeobj)
* [TCarbyneValue](#tcarbynevalue)
* [TCarbyneValueGeneral](#tcarbynevaluegeneral)
* [TCarbyneValueImplicit](#tcarbynevalueimplicit)

### Object literals

* [generalTypes](#generaltypes)
* [implicitTypes](#implicittypes)
* [objTypes](#objtypes)

---

## Type aliases

<a id="tcarbynedesarray"></a>

###  TCarbyneDesArray

**ΤTCarbyneDesArray**: *`Array`<`any`>*

*Defined in [lib/types.ts:87](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L87)*

___
<a id="tcarbynedescached"></a>

###  TCarbyneDesCached

**ΤTCarbyneDesCached**: * [TCarbyneDesObject](#tcarbynedesobject) &#124; [TCarbyneDesArray](#tcarbynedesarray) &#124; `Symbol` &#124; [ICarbyneCustomObject](interfaces/icarbynecustomobject.md)
*

*Defined in [lib/types.ts:89](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L89)*

___
<a id="tcarbynedesobject"></a>

###  TCarbyneDesObject

**ΤTCarbyneDesObject**: *`object`*

*Defined in [lib/types.ts:85](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L85)*

#### Type declaration

[key: `string`]: `any`

___
<a id="tcarbyneref"></a>

###  TCarbyneRef

**ΤTCarbyneRef**: * [ICarbyneRefObject](interfaces/icarbynerefobject.md) &#124; [ICarbyneRefArray](interfaces/icarbynerefarray.md) &#124; [ICarbyneRefSymbol](interfaces/icarbynerefsymbol.md)
*

*Defined in [lib/types.ts:55](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L55)*

___
<a id="tcarbynerefinternal"></a>

###  TCarbyneRefInternal

**ΤTCarbyneRefInternal**: * `object` & [TCarbyneRef](#tcarbyneref)
*

*Defined in [lib/types.ts:57](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L57)*

___
<a id="tcarbynerefs"></a>

###  TCarbyneRefs

**ΤTCarbyneRefs**: *`object`*

*Defined in [lib/types.ts:61](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L61)*

#### Type declaration

[id: `string`]: [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynetypeext"></a>

###  TCarbyneTypeExt

**ΤTCarbyneTypeExt**: * [TCarbyneTypeGeneral](#tcarbynetypegeneral) &#124; [TCarbyneTypeImplicit](#tcarbynetypeimplicit) &#124; [TCarbyneTypeObj](#tcarbynetypeobj)
*

*Defined in [lib/types.ts:19](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L19)*

___
<a id="tcarbynetypegeneral"></a>

###  TCarbyneTypeGeneral

**ΤTCarbyneTypeGeneral**: * "bool" &#124; "number" &#124; "string" &#124; "reference"
*

*Defined in [lib/types.ts:1](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L1)*

___
<a id="tcarbynetypeimplicit"></a>

###  TCarbyneTypeImplicit

**ΤTCarbyneTypeImplicit**: * "null" &#124; "undefined" &#124; "pinfinity" &#124; "ninfinity" &#124; "nan"
*

*Defined in [lib/types.ts:7](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L7)*

___
<a id="tcarbynetypeobj"></a>

###  TCarbyneTypeObj

**ΤTCarbyneTypeObj**: * "object" &#124; "array" &#124; "symbol"
*

*Defined in [lib/types.ts:14](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L14)*

___
<a id="tcarbynevalue"></a>

###  TCarbyneValue

**ΤTCarbyneValue**: * [TCarbyneValueGeneral](#tcarbynevaluegeneral) &#124; [TCarbyneValueImplicit](#tcarbynevalueimplicit)
*

*Defined in [lib/types.ts:33](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L33)*

___
<a id="tcarbynevaluegeneral"></a>

###  TCarbyneValueGeneral

**ΤTCarbyneValueGeneral**: *`object`*

*Defined in [lib/types.ts:24](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L24)*

#### Type declaration

 data: `any`

 type: [TCarbyneTypeGeneral](#tcarbynetypegeneral)

___
<a id="tcarbynevalueimplicit"></a>

###  TCarbyneValueImplicit

**ΤTCarbyneValueImplicit**: *`object`*

*Defined in [lib/types.ts:29](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/types.ts#L29)*

#### Type declaration

 type: [TCarbyneTypeImplicit](#tcarbynetypeimplicit)

___

## Object literals

<a id="generaltypes"></a>

### `<Const>` generalTypes

**generalTypes**: *`object`*

*Defined in [lib/carbyne.ts:27](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L27)*

The general types, that have a `data` property.
*__type__*: {Object}

<a id="generaltypes.bool"></a>

####  bool

**● bool**: *`boolean`* = true

*Defined in [lib/carbyne.ts:28](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L28)*

___
<a id="generaltypes.number"></a>

####  number

**● number**: *`boolean`* = true

*Defined in [lib/carbyne.ts:29](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L29)*

___
<a id="generaltypes.reference"></a>

####  reference

**● reference**: *`boolean`* = true

*Defined in [lib/carbyne.ts:31](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L31)*

___
<a id="generaltypes.string"></a>

####  string

**● string**: *`boolean`* = true

*Defined in [lib/carbyne.ts:30](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L30)*

___

___
<a id="implicittypes"></a>

### `<Const>` implicitTypes

**implicitTypes**: *`object`*

*Defined in [lib/carbyne.ts:39](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L39)*

The implicit types, do not have a `data` property.
*__type__*: {Object}

<a id="implicittypes.nan"></a>

####  nan

**● nan**: *`boolean`* = true

*Defined in [lib/carbyne.ts:44](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L44)*

___
<a id="implicittypes.ninfinity"></a>

####  ninfinity

**● ninfinity**: *`boolean`* = true

*Defined in [lib/carbyne.ts:43](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L43)*

___
<a id="implicittypes.null"></a>

####  null

**● null**: *`boolean`* = true

*Defined in [lib/carbyne.ts:40](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L40)*

___
<a id="implicittypes.pinfinity"></a>

####  pinfinity

**● pinfinity**: *`boolean`* = true

*Defined in [lib/carbyne.ts:42](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L42)*

___
<a id="implicittypes.undefined"></a>

####  undefined

**● undefined**: *`boolean`* = true

*Defined in [lib/carbyne.ts:41](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L41)*

___

___
<a id="objtypes"></a>

### `<Const>` objTypes

**objTypes**: *`object`*

*Defined in [lib/carbyne.ts:52](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L52)*

The object types, have a `obj` attribute with an object inside.
*__type__*: {Object}

<a id="objtypes.array"></a>

####  array

**● array**: *`boolean`* = true

*Defined in [lib/carbyne.ts:54](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L54)*

___
<a id="objtypes.object"></a>

####  object

**● object**: *`boolean`* = true

*Defined in [lib/carbyne.ts:53](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L53)*

___
<a id="objtypes.symbol"></a>

####  symbol

**● symbol**: *`boolean`* = true

*Defined in [lib/carbyne.ts:55](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/carbyne.ts#L55)*

___

___

