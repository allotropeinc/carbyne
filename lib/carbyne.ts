import {
	CarbyneBlob,
	CarbyneMemoryStore,
	ICarbyneCustomObject,
	ICarbyneCustomObjectConstructor,
	ICarbyneStore,
	TCarbyneCache,
	TCarbyneDesArray,
	TCarbyneDesCache,
	TCarbyneDesObject,
	TCarbyneRefInternal,
	TCarbyneRefInternalArray,
	TCarbyneRefInternalCustom,
	TCarbyneRefInternalObject,
	TCarbyneTypeExt,
	TCarbyneTypeObj,
	TCarbyneValue,
	TCarbyneValueGeneral
} from './index'

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * The general types, that have a `data` property.
 */
export const generalTypes = {
	/**
	 * Booleans.
	 */
	bool      : true,
	/**
	 * Numbers.
	 */
	number    : true,
	/**
	 * Strings.
	 */
	string    : true,
	/**
	 * References to other objects (custom or otherwise).
	 */
	reference : true
}

/**
 * The implicit types, do not have a `data` property.
 */
export const implicitTypes = {
	/**
	 * The literal `null`.
	 */
	null      : true,
	/**
	 * The literal `undefined`.
	 */
	undefined : true,
	/**
	 * The literal `Infinity`.
	 */
	pinfinity : true,
	/**
	 * The literal `-Infinity`.
	 */
	ninfinity : true,
	/**
	 * The literal `NaN`.
	 */
	nan       : true
}

/**
 * The object types, have a `obj` attribute with an object inside.
 */
export const objTypes = {
	/**
	 * The object type has an `Object` as the `obj` property.
	 */
	object : true,
	/**
	 * The array type has an `Array` as the `obj` property.
	 */
	array  : true,
	/**
	 * The symbol type has no `obj` property. Symbols are immutable.
	 */
	symbol : true
}

/**
 * The representation of a Carbyne database.
 *
 * Example:
 *
 * ```typescript
 * import { Carbyne, CarbyneMemoryStore } from 'carbyne-db'
 *
 * const db = new Carbyne ( new CarbyneMemoryStore () )
 *
 * // ...
 * ```
 */
export class Carbyne {
	/**
	 * The cache of serialized items that are used to protect against infinite
	 * recursion and copies.
	 */
	protected serializeCache : TCarbyneCache

	/**
	 * The cache of deserialized items that are used to protect against infinite
	 * recursion and copies.
	 */
	protected deserializeCache : TCarbyneDesCache

	/**
	 * Used so we don't make unnecessary copies of symbols with the same ID.
	 */
	protected symbolIds : any

	/**
	 * The [[ICarbyneStore]] currently in use by the database. Pass this as an
	 * argument to [[Carbyne.constructor]].
	 */
	protected store : ICarbyneStore

	/**
	 * The registry of custom objects the database can use. Use
	 * [[Carbyne.registerCustomObject]] to add one of these.
	 */
	protected customObjects : { [ name : string ] : ICarbyneCustomObjectConstructor }

	/**
	 * Create the database.
	 *
	 * ```typescript
	 * import { Carbyne, CarbyneDirectoryStore } from 'carbyne-db'
	 *
	 * const db = new Carbyne ( new CarbyneDirectoryStore ( 'test-db' ) )
	 *
	 * // ...
	 * ```
	 *
	 * @param {ICarbyneStore} store The store to use for the database. See
	 * [[Carbyne.customObjects]] and [[Carbyne.registerCustomObject]].
	 */
	constructor ( store? : ICarbyneStore ) {
		if ( !store ) {
			store = new CarbyneMemoryStore ()
		}

		this.store = <ICarbyneStore> store

		this.serializeCache = {}
		this.deserializeCache = {}
		this.symbolIds = {}

		this.customObjects = {
			'blob' : CarbyneBlob
		}
	}

	/**
	 * Gets the type of an object. This is used internally by `serialize()` to
	 * figure out what to store objects as.
	 *
	 * ```typescript
	 * await db.getType ( 5 ) // 'number'
	 * ```
	 *
	 * @param obj The object to get the type of.
	 * @returns {Promise<TCarbyneTypeExt | string>} Returns `TCarbyneTypeExt` if
	 * it's a recognized type, or `string` if it's a custom type.
	 */
	protected async getType ( obj : any ) : Promise<TCarbyneTypeExt | string> {
		const type = typeof obj

		if ( type === 'number' ) {
			if ( isNaN ( obj ) ) {
				return 'nan'
			} else if ( isFinite ( obj ) ) {
				return 'number'
			} else {
				if ( obj > 0 ) {
					return 'pinfinity'
				} else {
					return 'ninfinity'
				}
			}
		} else if ( type === 'boolean' ) {
			return 'bool'
		} else if ( Array.isArray ( obj ) ) {
			return 'array'
		} else if ( type === 'function' ) {
			throw new TypeError ( 'functions are not supported' )
		} else if ( obj === null ) {
			return 'null'
		} else if ( type === 'object' ) {
			const keys = Object.keys ( this.customObjects )

			for ( let i = 0, key ; key = keys[ i ], i < keys.length ; i++ ) {
				if ( obj instanceof this.customObjects[ key ] ) {
					return <string> key
				}
			}
		}

		return type
	}

	/**
	 * Serializes an object into storage. Utilizes recursion and caching to
	 * support circular references and references to past serialized objects.
	 *
	 * ```typescript
	 * await db.serialize (
	 *     {
	 *         bool   : true,
	 *         number : 42,
	 *         null   : null
	 *     },
	 *     'root'
	 * )
	 * ```
	 *
	 * The example above would be serialized in a [[CarbyneMemoryStore]] as:
	 *
	 * ```json
	 * {
	 *     "bool": {
	 *         "type": "bool",
	 *         "data": true
	 *     },
	 *     "number": {
	 *         "type": "number",
	 *         "data": 42
	 *     },
	 *     "null": {
	 *         "type": "null"
	 *     }
	 * }
	 * ```
	 *
	 * Note that instead of using this method directly, which is `protected`,
	 * you should use [[Carbyne.fromObject]] instead. [[Carbyne.setKey]]
	 * automatically serializes what you pass into it, so there is no need to
	 * manually do this.
	 *
	 * @param obj The object to serialize. Can be anything, honestly.
	 * @param {string} id The ID to give the new object. This is important.
	 * @param {boolean} clearCache Whether to remove the ID being serialized
	 * from the cache.
	 * @returns {Promise<TCarbyneValue>} The serialized object.
	 */
	protected async serialize (
		obj : any,
		id : string,
		clearCache : boolean = true
	) : Promise<TCarbyneValue> {
		const type = await this.getType ( obj )

		if ( type === 'symbol' ) {
			if ( this.symbolIds[ obj ] ) {
				id = this.symbolIds[ obj ]
			} else {
				this.symbolIds[ obj ] = id
			}
		}

		if ( ( type === 'object' || type === 'array' || this.customObjects.hasOwnProperty ( type ) ) ) {
			if ( obj.hasOwnProperty ( '_id' ) && typeof obj._id === 'string' ) {
				id = obj._id
			} else {
				Object.defineProperty (
					obj,
					'_id',
					{
						value : id
					}
				)
			}
		}

		if ( objTypes[ <TCarbyneTypeObj> type ] || this.customObjects.hasOwnProperty ( type ) ) {
			if ( this.serializeCache.hasOwnProperty ( obj._id ) ) {
				if ( !clearCache ) {
					return this.serializeCache[ obj._id ]
				} else {
					delete this.serializeCache[ obj._id ]
				}
			}
		}

		if ( objTypes.hasOwnProperty ( type ) || this.customObjects.hasOwnProperty ( type ) ) {
			const toReturn = this.serializeCache[ id ] || ( this.serializeCache[ id ] = {
				type : 'reference',
				data : id
			} )

			if ( type === 'symbol' ) {
				await this.store.setRef (
					id,
					{
						type : 'symbol'
					}
				)
			} else {
				const newObj = <TCarbyneRefInternal> {
					type : type,
					id   : id
				}

				const addKV = async (
					key : string | number,
					value : any
				) => {
					( <any> ( <TCarbyneRefInternalObject | TCarbyneRefInternalArray> newObj ).obj )[ key ] = await this.serialize (
						value,
						await this.store.genID (),
						false
					)
				}

				if ( type === 'object' ) {
					( <TCarbyneRefInternalObject> newObj ).obj = {}

					const keys = Object.keys ( obj )

					for (
						let i = 0,
						    key ;

						key = keys[ i ],
						i < keys.length ;

						i++
					) {
						const value = obj[ key ]

						await addKV (
							key,
							value
						)
					}
				} else if ( type === 'array' ) {
					( <TCarbyneRefInternalArray> newObj ).obj = []

					for ( let i = 0, value ; value = obj[ i ], i < obj.length ; i++ ) {
						await addKV (
							i,
							value
						)
					}
				} else {
					( <TCarbyneRefInternalCustom> newObj ).data = await obj.serialize ()
				}

				await this.store.setRef (
					id,
					newObj
				)
			}

			return toReturn
		} else {
			const value = <TCarbyneValue & { data? : any }> {
				type : type
			}

			if ( generalTypes.hasOwnProperty ( type ) ) {
				value.data = obj
			}

			return value
		}
	}

	/**
	 * Converts a [[TCarbyneValue]] into its primitive counterpart. Note that
	 * this function doesn't support primitives, objects, arrays, Symbols, or
	 * custom objects. Basically, it converts this:
	 *
	 * ```json
	 * {
	 *     "type": "number",
	 *     "data": 42
	 * }
	 * ```
	 *
	 * to, for example, `42` in this case.
	 *
	 * @param {TCarbyneValue} value The value to convert.
	 * @returns {Promise<any>} The new primitive after conversion.
	 */
	protected static async getValue (
		value : TCarbyneValue
	) {
		if ( value.type === 'reference' ) {
			throw new TypeError ( 'references are not supported by getValue' )
		} else if ( generalTypes.hasOwnProperty ( value.type ) ) {
			return ( <TCarbyneValueGeneral> value ).data
		} else {
			const type = value.type

			switch ( type ) {
				case 'null':
					return null
				case 'undefined':
					return undefined
				case 'pinfinity':
					return Infinity
				case 'ninfinity':
					return -Infinity
				case 'nan':
					return NaN
				default:
					throw new TypeError ( 'type is invalid' )
			}
		}
	}

	/**
	 * Deserializes an object specified by ID into storage. Utilizes recursion
	 * and caching to support circular references and references to past
	 * deserialized objects.
	 *
	 * For example, if you have the [[Carbyne.serialize]] example, it would
	 * output basically exactly what you put into it in that example (it would
	 * be a different object, though, but with the same data). Deserializing
	 * multiple times returns the same object, because of
	 * [[Carbyne.deserializeCache]].
	 *
	 * Note that, just like [[Carbyne.serialize]], this is `protected` and
	 * you should call another method that uses it instead, such as
	 * [[Carbyne.toObject]].
	 *
	 * @param {string | TCarbyneValue} obj The `string` ID or [[TCarbyneValue]]
	 * value to deserialize. If it's a `string` ID, it's assumed you want the
	 * object that ID points to.
	 * @returns {Promise<any>} The deserialized object.
	 */
	protected async deserialize (
		obj : string | TCarbyneValue
	) {
		if ( typeof obj === 'string' ) {
			obj = <TCarbyneValue> {
				type : 'reference',
				data : obj
			}
		}

		if ( obj.type === 'reference' ) {
			const id = obj.data

			if ( !this.deserializeCache.hasOwnProperty ( id ) ) {
				const type = await this.store.getType ( id )

				if ( type === 'object' ) {
					const newObj = this.deserializeCache[ id ] = <TCarbyneDesObject> {}
					const keys = await this.store.getKeys ( id )

					for (
						let i = 0,
						    key ;

						key = keys[ i ],
						i < keys.length ;

						i++
					) {
						const value = await this.store.getKey (
							id,
							key
						)

						newObj[ key ] = await this.deserialize ( value )
					}

					Object.defineProperty (
						newObj,
						'_id',
						{ value : id }
					)
				} else if ( type === 'array' ) {
					const newObj = this.deserializeCache[ id ] = <TCarbyneDesArray> []
					const length = await this.store.getLength ( id )

					for (
						let i = 0,
						    value ;

						i < length ;

						i++
					) {
						value = await this.store.getKey (
							id,
							i
						)

						newObj.push ( await this.deserialize ( value ) )
					}

					Object.defineProperty (
						newObj,
						'_id',
						{ value : id }
					)
				} else if ( type === 'symbol' ) {
					const symbol = Symbol ()

					this.symbolIds[ symbol ] = id
					this.deserializeCache[ id ] = symbol
				} else if ( this.customObjects[ type ] ) {
					this.deserializeCache[ id ] = <ICarbyneCustomObject> new this.customObjects[ type ] (
						await this.store.getData ( id ),
						id
					)
				}
			}

			return this.deserializeCache[ id ]
		} else {
			return await Carbyne.getValue ( obj )
		}
	}

	/**
	 * Creates a Carbyne model from an object. This does wipe the database in
	 * the case of a [[CarbyneDirectoryStore]], so be careful. It would be
	 * advised to check the directory first for files to make sure it's empty
	 * before calling this function.
	 *
	 * This is equivalent to the code:
	 *
	 * ```typescript
	 * const db = new Carbyne ( store )
	 * await db.clear ( obj )
	 *
	 * return db
	 * ```
	 *
	 * because that is the real source code of the function.
	 *
	 * @param obj The object to use as ID `'root'`.
	 * @param {ICarbyneStore} store The store to use. Defaults to
	 * [[CarbyneMemoryStore]] like [[Carbyne.constructor]].
	 * @returns {Promise<Carbyne>}
	 */
	static async fromObject (
		obj : any,
		store? : ICarbyneStore
	) {
		const db = new Carbyne ( store )
		await db.clear ( obj )

		return db
	}

	/**
	 * Clears the database, immediately and irreversibly dropping all data.
	 * `newRoot` is optional and specifies what you want ID `'root'` to be
	 * replaced with. Defaults to empty object (`{}`).
	 *
	 * [[Carbyne.fromObject]] uses this. You can use this manually if you ever
	 * need to.
	 *
	 * @param {any} newRoot
	 * @returns {Promise<void>}
	 */
	async clear ( newRoot? : any ) {
		await this.store.clear ()

		if ( newRoot ) {
			await this.setRoot ( newRoot )
		}
	}

	/**
	 * Deserializes an object, specified by ID, value, or reference, and returns
	 * it. This uses [[Carbyne.deserialize]] internally.
	 *
	 * @param obj The object or ID to deserialize. Defaults to `'root'`.
	 * @returns {Promise<any>} The deserialized object.
	 */
	async toObject ( obj? : any ) {
		return await this.deserialize ( obj || 'root' )
	}

	/**
	 * Sets the key `key` of object `obj` to `value`. Pretty self-explanatory.
	 * This also sets the key of any current deserialized objects.
	 *
	 * @param obj The object or ID to target.
	 * @param {string | number} key The key to target.
	 * @param value The value to set `obj[key]` to.
	 * @returns {Promise<void>}
	 */
	async setKey (
		obj : any,
		key : string | number,
		value : any
	) {
		const id = await Carbyne.resolveId ( obj )

		const serialized = await this.serialize (
			value,
			await this.store.genID ()
		)

		await this.store.setKey (
			id,
			key,
			serialized
		)

		if ( this.deserializeCache && this.deserializeCache.hasOwnProperty ( id ) ) {
			( <TCarbyneDesObject> this.deserializeCache [ id ] )[ key ] = await this.deserialize ( serialized )
		}
	}

	/**
	 * Resolves the ID of `obj`. Can take strings, references, and deserialized
	 * objects too. This is used by internal [[Carbyne]] functions to allow you
	 * to pass anything from strings to deserialized objects to methods like
	 * [[Carbyne.getKey]] or [[Carbyne.setKey]].
	 *
	 * @param obj The object to resolve.
	 * @returns {Promise<string>} The resolved ID.
	 */
	protected static async resolveId ( obj : any ) : Promise<string> {
		if ( typeof obj === 'string' ) {
			return obj
		} else if ( !obj._id ) {
			if ( obj.hasOwnProperty ( 'type' ) && obj.type === 'reference' && obj.hasOwnProperty ( 'data' ) ) {
				return obj.data
			} else {
				throw new TypeError ( 'object does not exist in database' )
			}
		}

		return obj._id
	}

	/**
	 * Gets the key `key` of object `obj` and returns it.
	 *
	 * @param obj The object or ID to target.
	 * @param {string | number} key
	 * @returns {Promise<void>}
	 */
	async getKey (
		obj : any,
		key : string | number
	) {
		return await await this.store.getKey (
			await Carbyne.resolveId ( obj ),
			key
		)
	}

	/**
	 * Pushes `value` to array `obj`. Works with objects too, I guess. It
	 * honestly doesn't care. [[ICarbyneStore.push]] basically just calls
	 * `await db.setKey ( await db.keys ( obj ).length, value )`.
	 *
	 * @param obj The object to target.
	 * @param {string | number} value The value to push to `obj`.
	 * @returns {Promise<void>}
	 */
	async push (
		obj : any,
		value : any
	) {
		const id = await Carbyne.resolveId ( obj )

		const serialized = await this.serialize (
			value,
			await this.store.genID ()
		)

		await this.store.push (
			id,
			serialized
		)

		if ( this.deserializeCache && this.deserializeCache.hasOwnProperty ( id ) ) {
			( <TCarbyneDesArray> this.deserializeCache[ id ] ).push ( await this.deserialize ( serialized ) )
		}
	}

	/**
	 * Sets the data of `obj` to `data`. Only use on custom objects. `obj` can
	 * be an ID, reference, or deserialized object. If you use this on
	 * non-custom objects, weird bugs may pop up and you may have a bad time.
	 *
	 * This does not serialize data.
	 *
	 * @param obj The ID or object to target.
	 * @param data The data to set the object to.
	 * @returns {Promise<void>}
	 */
	async setData (
		obj : any,
		data : any
	) {
		const id = await Carbyne.resolveId ( obj )

		await this.store.setData (
			id,
			data
		)

		if ( this.deserializeCache && this.deserializeCache.hasOwnProperty ( id ) ) {
			( <TCarbyneDesObject> this.deserializeCache[ id ] ).data = data
		}
	}

	/**
	 * Gets the data of `obj`. `obj` can be an ID, reference, or deserialized
	 * object. Uses [[Carbyne.resolveId]].
	 *
	 * @param obj The object to target.
	 * @returns {Promise<any>} The data of `obj`.
	 */
	async getData ( obj : any ) {
		return await this.store.getData ( await Carbyne.resolveId ( obj ) )
	}

	/**
	 * Registers a new custom object. `name` is the `type`, and `cls` is the
	 * class (not an instance of it). See [[Carbyne.customObjects]].
	 *
	 * @param {string} name The name (type) of the new object.
	 * @param {ICarbyneCustomObjectConstructor} cls The class to use.
	 * @returns {Promise<void>}
	 */
	async registerCustomObject (
		name : string,
		cls : ICarbyneCustomObjectConstructor
	) {
		this.customObjects[ name ] = cls
	}

	/**
	 * This deletes the key `key` in object `obj`.
	 *
	 * @param obj
	 * @param {number | string} key
	 * @returns {Promise<void>}
	 */
	async delKey (
		obj : any,
		key : number | string
	) {
		const id = await Carbyne.resolveId ( obj )

		await this.store.delKey (
			id,
			key
		)
	}

	/**
	 * Returns a reference to the root object.
	 *
	 * Equivalent to `return { type : 'reference', data : 'root' }`.
	 *
	 * @returns {Promise<TCarbyneValue>}
	 */
	async getRoot () {
		return {
			type : 'reference',
			data : 'root'
		}
	}

	/**
	 * Checks whether `obj` has the key `key`. Great for avoiding errors, since
	 * usually trying to access a key that doesn't exist throws a huge error.
	 *
	 * @param obj
	 * @param {number | string} key
	 * @returns {Promise<void>}
	 */
	async hasKey (
		obj : any,
		key : number | string
	) {
		return await this.store.hasKey (
			await Carbyne.resolveId ( obj ),
			key
		)
	}

	/**
	 * Checks if an object supports keys, such as [[Carbyne.getKey]] and
	 * [[Carbyne.setKey]]. Useful for checking if, for example, `'root'` exists
	 * and is usable (it is not on initialization).
	 *
	 * @param {any} obj The object to check.
	 * @returns {Promise<boolean>} Whether the object supports keys.
	 */
	async supportsKeys ( obj : any ) {
		const id = await Carbyne.resolveId ( obj )

		return await this.store.supportsKeys ( id )
	}

	/**
	 * Sets the root of the database to `obj`. [[Carbyne.clear]] is preferred as
	 * it also cleans up orphaned objects.
	 *
	 * @param obj
	 * @returns {Promise<void>}
	 */
	async setRoot ( obj : any ) {
		await this.serialize (
			obj,
			'root'
		)
	}
}