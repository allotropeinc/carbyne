/**
 * General types that have [[TCarbyneValueGeneral.data]].
 */
export type TCarbyneTypeGeneral =
	'bool' |
	'number' |
	'string' |
	'reference'

/**
 * Implicit types that have no `data` property.
 */
export type TCarbyneTypeImplicit =
	'null' |
	'undefined' |
	'pinfinity' |
	'ninfinity' |
	'nan'

/**
 * Object types that have [[TCarbyneRefInternal.obj]].
 */
export type TCarbyneTypeObj =
	'object' |
	'array' |
	'symbol'

/**
 * All types.
 */
export type TCarbyneTypeExt =
	TCarbyneTypeGeneral |
	TCarbyneTypeImplicit |
	TCarbyneTypeObj

/**
 * General values where additional info is required other than the
 * [[TCarbyneTypeGeneral]].
 */
export type TCarbyneValueGeneral = {
	type : TCarbyneTypeGeneral,
	data : any
}

/**
 * Implicit values where [[TCarbyneTypeImplicit]] describes the value.
 */
export type TCarbyneValueImplicit = {
	type : TCarbyneTypeImplicit
}

/**
 * All values.
 */
export type TCarbyneValue =
	TCarbyneValueGeneral |
	TCarbyneValueImplicit

/**
 * See [[TCarbyneRef]]
 */
export interface ICarbyneRefObject {
	type : 'object'
	id : string
}

/**
 * See [[TCarbyneRef]]
 */
export interface ICarbyneRefArray {
	type : 'array'
	id : string
}

/**
 * See [[TCarbyneRef]]
 */
export interface ICarbyneRefSymbol {
	type : 'symbol'
	id : string
}

/**
 * See [[TCarbyneRef]]
 */
export interface ICarbyneRefCustom {
	type : string
	id : string
}

/**
 * A ref value, stored in [[TCarbyneRefs]].
 */
export type TCarbyneRef =
	ICarbyneRefObject |
	ICarbyneRefArray |
	ICarbyneRefSymbol |
	ICarbyneRefCustom

/**
 * See [[TCarbyneRefInternal]]
 */
export type TCarbyneRefInternalObject = {
	obj : {
		[ key : string ] : TCarbyneValue
	}
} & ICarbyneRefObject

/**
 * See [[TCarbyneRefInternal]]
 */
export type TCarbyneRefInternalArray = {
	obj : Array<TCarbyneValue>
} & ICarbyneRefArray

/**
 * See [[TCarbyneRefInternal]]
 */
export type TCarbyneRefInternalSymbol = {
	obj : Symbol
} & ICarbyneRefSymbol

/**
 * See [[TCarbyneRefInternal]]
 */
export type TCarbyneRefInternalCustom = {
	data : any
} & ICarbyneRefCustom

/**
 * Internal refs used by [[ICarbyneStore]] methods.
 */
export type TCarbyneRefInternal =
	TCarbyneRefInternalObject |
	TCarbyneRefInternalArray |
	TCarbyneRefInternalSymbol |
	TCarbyneRefInternalCustom

/**
 * Internal ref store used by [[ICarbyneStore]] methods.
 */
export type TCarbyneRefs = {
	[ id : string ] : TCarbyneRefInternal
}

/**
 * Cache used by [[Carbyne.serialize]].
 */
export interface ICarbyneCache {
	[ id : string ] : TCarbyneValue
}

/**
 * [[ICarbyneDesCache]]
 */
export type TCarbyneDesObject = {
	[ key : string ] : any
}

/**
 * [[ICarbyneDesCache]]
 */
export type TCarbyneDesArray = Array<any>

/**
 * [[ICarbyneDesCache]]
 */
export type TCarbyneDesCached =
	TCarbyneDesObject |
	TCarbyneDesArray |
	Symbol |
	ICarbyneCustomObject

/**
 * Cache used by [[Carbyne.deserialize]].
 */
export interface ICarbyneDesCache {
	[ id : string ] : TCarbyneDesCached
}

/**
 * Model used by [[CarbyneMemoryStore]].
 */
export interface ICarbyneMemoryModel {
	root : TCarbyneRef | null
	refs : TCarbyneRefs
}

/**
 * The interface you need to implement in a class passed to
 * [[Carbyne.constructor]].
 */
export interface ICarbyneStore {
	/**
	 * Clears the database of any data, setting the root to `newRoot` or {} (empty object).
	 *
	 * @param {any} newRoot
	 * @returns {Promise<void>}
	 */
	clear ( newRoot? : any ) : Promise<void>

	/**
	 * Gets a new ID to use for objects.
	 *
	 * @returns {Promise<string>}
	 */
	genID () : Promise<string>

	/**
	 * Sets a reference by ID.
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
	 * Gets the value of a key in an object.
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
	 * Sets the value of a key in an object.
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
	 * Gets the type of an object specified by ID.
	 *
	 * @param {string} id
	 * @returns {Promise<TCarbyneTypeObj>}
	 */
	getType ( id : string ) : Promise<TCarbyneTypeObj>

	/**
	 * Gets the length of an array specified by ID.
	 *
	 * @param {string} id
	 * @returns {Promise<number>}
	 */
	getLength ( id : string ) : Promise<number>

	/**
	 * Gets the keys of an object specified by ID.
	 *
	 * @param {string} id
	 * @returns {Promise<string[]>}
	 */
	getKeys ( id : string ) : Promise<string[]>

	/**
	 * Pushes an object to an array.
	 *
	 * @param {string} id
	 * @param {TCarbyneValue} value
	 */
	push (
		id : string,
		value : TCarbyneValue
	) : Promise<void>

	/**
	 * Gets the data of a custom object.
	 *
	 * @param {string} id
	 * @returns {Promise<any>}
	 */
	getData ( id : string ) : Promise<any>

	/**
	 * Sets the data of a custom object.
	 *
	 * @param {string} id
	 * @param {any} data
	 * @returns {Promise<void>}
	 */
	setData (
		id : string,
		data : any
	) : Promise<void>
}

/**
 * A custom object. See [[Carbyne.registerCustomObject]].
 */
export interface ICarbyneCustomObject {
	_id : string | undefined

	/**
	 * Serialize this custom object, return an object that can be passed to MessagePack.
	 * @returns {Promise<any>}
	 */
	serialize () : Promise<any>
}

/**
 * The constructor for a [[ICarbyneCustomObject]].
 */
export interface ICarbyneCustomObjectConstructor {
	/**
	 * Create a custom object from the object `data`.
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