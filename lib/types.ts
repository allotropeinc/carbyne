/**
 * These are general types that need a `data` property. This includes booleans,
 * numbers, strings, and references, because the type does not tell Carbyne what
 * the value should be.
 *
 * For example, a number could be `1`, `2`, or `5`, Carbyne doesn't know. In
 * contrast, Carbyne knows what a [[TCarbyneTypeImplicit]] is, because there is,
 * for example, no two values that both have the type `null`, only one: `null`.
 */
export type TCarbyneTypeGeneral =
	'bool' |
	'number' |
	'string' |
	'reference'

/**
 * These are implicit types that don't need a `data` property. This includes
 * `null`, `undefined`, `+Infinity`, `-Infinity`, and `NaN`. These are all
 * special values that there are never more than one instance of, so there is no
 * need for a data property like [[TCarbyneTypeGeneral]] has.
 */
export type TCarbyneTypeImplicit =
	'null' |
	'undefined' |
	'pinfinity' |
	'ninfinity' |
	'nan'

/**
 * These are the types of objects. They have, instead of
 * a `data` property, an `obj` property. However, only internal
 * [[ICarbyneStore]] methods access the `obj` property.
 */
export type TCarbyneTypeObj =
	'object' |
	'array' |
	'symbol'

/**
 * All types. This doesn't include custom types, but we can't know in advance
 * what those are, so they aren't included here. [[CarbyneBlob]]s are an
 * exception to this, but we're not adding any special cases for that, as
 * using only our exposed APIs to test if they are good enough is actually a
 * good thing in some cases.
 */
export type TCarbyneTypeExt =
	TCarbyneTypeGeneral |
	TCarbyneTypeImplicit |
	TCarbyneTypeObj

/**
 * General values where additional info is required other than the
 * [[TCarbyneTypeGeneral]]. That's where the `data` property comes in.
 */
export type TCarbyneValueGeneral = {
	type : TCarbyneTypeGeneral,
	data : any
}

/**
 * Implicit values where [[TCarbyneTypeImplicit]] describes the value. See
 * [[TCarbyneTypeImplicit]] for more information.
 */
export type TCarbyneValueImplicit = {
	type : TCarbyneTypeImplicit
}

/**
 * All values. This includes both general values, [[TCarbyneValueGeneral]], and
 * implicit values, [[TCarbyneValueImplicit]].
 */
export type TCarbyneValue =
	TCarbyneValueGeneral |
	TCarbyneValueImplicit

/**
 * See [[TCarbyneRef]]
 */
export type TCarbyneRefObject = {
	type : 'object'
	id : string
}

/**
 * See [[TCarbyneRef]]
 */
export type TCarbyneRefArray = {
	type : 'array'
	id : string
}

/**
 * See [[TCarbyneRef]]
 */
export type TCarbyneRefSymbol = {
	type : 'symbol'
	id : string
}

/**
 * See [[TCarbyneRef]]
 */
export type TCarbyneRefCustom = {
	type : string
	id : string
}

/**
 * A ref value, stored in [[TCarbyneRefs]]. This includes objects, arrays,
 * symbols, and custom objects, like [[CarbyneBlob]]s. Blobs are, in fact,
 * custom, and we are using our own APIs to implement them.
 */
export type TCarbyneRef =
	TCarbyneRefObject |
	TCarbyneRefArray |
	TCarbyneRefSymbol |
	TCarbyneRefCustom

/**
 * See [[TCarbyneRefInternal]]
 */
export type TCarbyneRefInternalObject = {
	obj : {
		[ key : string ] : TCarbyneValue
	}
} & TCarbyneRefObject

/**
 * See [[TCarbyneRefInternal]]
 */
export type TCarbyneRefInternalArray = {
	obj : Array<TCarbyneValue>
} & TCarbyneRefArray

/**
 * See [[TCarbyneRefInternal]]
 */
export type TCarbyneRefInternalSymbol = {
	obj : Symbol
} & TCarbyneRefSymbol

/**
 * See [[TCarbyneRefInternal]]
 */
export type TCarbyneRefInternalCustom = {
	data : any
} & TCarbyneRefCustom

/**
 * Internal refs used by [[ICarbyneStore]] methods. This includes a `data`/`obj`
 * property that external methods don't have access to, hopefully.
 */
export type TCarbyneRefInternal =
	TCarbyneRefInternalObject |
	TCarbyneRefInternalArray |
	TCarbyneRefInternalSymbol |
	TCarbyneRefInternalCustom

/**
 * Internal ref store used by [[ICarbyneStore]] methods. This is basically an
 * Object storing [[TCarbyneRefInternal]]s.
 */
export type TCarbyneRefs = {
	[ id : string ] : TCarbyneRefInternal
}

/**
 * Cache used by [[Carbyne.serialize]]. [[TCarbyneCache]]
 */
export type TCarbyneCache = {
	[ id : string ] : TCarbyneValue
}

/**
 * [[TCarbyneDesCache]]
 */
export type TCarbyneDesObject = {
	[ key : string ] : any
}

/**
 * [[TCarbyneDesCache]]
 */
export type TCarbyneDesArray = Array<any>

/**
 * [[TCarbyneDesCache]]
 */
export type TCarbyneDesCached =
	TCarbyneDesObject |
	TCarbyneDesArray |
	Symbol |
	ICarbyneCustomObject

/**
 * Cache used by [[Carbyne.deserialize]].
 */
export type TCarbyneDesCache = {
	[ id : string ] : TCarbyneDesCached
}

/**
 * Model used by [[CarbyneMemoryStore]].
 */
export type TCarbyneMemoryModel = {
	root : TCarbyneRef | null
	refs : TCarbyneRefs
}

/**
 * The interface you need to implement in a class passed to
 * [[Carbyne.constructor]].
 */
export interface ICarbyneStore {
	/**
	 * Clears the database, immediately and irreversibly dropping all data.
	 *[[Carbyne.fromObject]] uses this.
	 *
	 * @returns {Promise<void>}
	 */
	clear () : Promise<void>

	/**
	 * Generates a new ID to use for objects. The default implementation simply
	 * calls `uuid.v4 ()` and calls it a day.
	 *
	 * @returns {Promise<string>}
	 */
	genID () : Promise<string>

	/**
	 * Sets a reference by ID. This is used by [[Carbyne.serialize]].
	 *
	 * @param {string} id
	 * @param obj
	 * @returns {Promise<void>}
	 */
	setRef (
		id : string,
		obj : any
	) : Promise<void>

	/**
	 * Gets the value of a key in an object. This is used by [[Carbyne.getKey]].
	 *
	 * @param {string} id
	 * @param {number | string} key
	 * @returns {Promise<TCarbyneValue>}
	 */
	getKey (
		id : string,
		key : number | string
	) : Promise<TCarbyneValue>

	/**
	 * Sets the value of a key in an object. This is used by [[Carbyne.setKey]].
	 *
	 * @param {string} id
	 * @param {number | string} key
	 * @param {TCarbyneValue} value
	 * @returns {Promise<void>}
	 */
	setKey (
		id : string,
		key : number | string,
		value : TCarbyneValue
	) : Promise<void>

	/**
	 * Deletes a key from an object. This is used by [[Carbyne.delKey]].
	 *
	 * @param {string} id
	 * @param {number | string} key
	 * @returns {Promise<void>}
	 */
	delKey (
		id : string,
		key : number | string
	) : Promise<void>

	/**
	 * Gets the type of an object specified by ID. This is used by
	 * [[Carbyne.deserialize]].
	 *
	 * @param {string} id
	 * @returns {Promise<TCarbyneTypeObj>}
	 */
	getType ( id : string ) : Promise<TCarbyneTypeObj>

	/**
	 * Gets the length of an array specified by ID. This is used by
	 * [[Carbyne.deserialize]].
	 *
	 * @param {string} id
	 * @returns {Promise<number>}
	 */
	getLength ( id : string ) : Promise<number>

	/**
	 * Gets the keys of an object specified by ID. This is used by
	 * [[Carbyne.deserialize]].
	 *
	 * @param {string} id
	 * @returns {Promise<string[]>}
	 */
	getKeys ( id : string ) : Promise<string[]>

	/**
	 * Pushes an object to an array. This is used by [[Carbyne.push]].
	 *
	 * @param {string} id
	 * @param {TCarbyneValue} value
	 */
	push (
		id : string,
		value : TCarbyneValue
	) : Promise<void>

	/**
	 * Gets the data of a custom object. This is used by [[Carbyne.getData]].
	 *
	 * @param {string} id
	 * @returns {Promise<any>}
	 */
	getData ( id : string ) : Promise<any>

	/**
	 * Sets the data of a custom object. This is used by [[Carbyne.setData]].
	 *
	 * @param {string} id
	 * @param {any} data
	 * @returns {Promise<void>}
	 */
	setData (
		id : string,
		data : any
	) : Promise<void>

	/**
	 * Returns whether the object `id` has the key `key`. This is used by
	 * [[Carbyne.hasKey]].
	 *
	 * @param {string} id
	 * @param {number | string} key
	 * @returns {Promise<boolean>}
	 */
	hasKey (
		id : string,
		key : number | string
	) : Promise<boolean>

	/**
	 * Test if an object supports [[Carbyne.getKey]]/[[Carbyne.setKey]]. See
	 * [[Carbyne.supportsKeys]].
	 *
	 * @param {string} id The ID of the object to check.
	 * @returns {Promise<boolean>}
	 */
	supportsKeys ( id : string ) : Promise<boolean>
}

/**
 * A custom object. See [[Carbyne.registerCustomObject]].
 */
export interface ICarbyneCustomObject {
	/**
	 * The ID of this custom object. Undefined if it hasn't been recoreded in
	 * the database yet.
	 */
	_id : string | undefined

	/**
	 * Serialize this custom object, return an object that can be passed to
	 * MessagePack.
	 *
	 * @returns {Promise<any>}
	 */
	serialize () : Promise<any>
}

/**
 * The constructor for a [[ICarbyneCustomObject]].
 */
export interface ICarbyneCustomObjectConstructor {
	/**
	 * Create a custom object from the object `data`. `_id` is optional, and
	 * basically specifies, if the custom object is recorded in the database,
	 * *where* it's recorded.
	 *
	 * @param data
	 * @param {string} _id
	 * @returns {ICarbyneCustomObject}
	 */
	new (
		data : any,
		_id? : string
	) : ICarbyneCustomObject
}