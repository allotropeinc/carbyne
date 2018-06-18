import {
	CarbyneBlob,
	CarbyneMemoryStore,
	ICarbyneCache,
	ICarbyneCustomObject,
	ICarbyneCustomObjectConstructor,
	ICarbyneDesCache,
	ICarbyneStore,
	TCarbyneDesArray,
	TCarbyneDesObject,
	TCarbyneRefInternal,
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
 *
 * @type {Object}
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
 *
 * @type {Object}
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
 *
 * @type {Object}
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
 * ```
 */
export class Carbyne {
	/**
	 * The cache of serialized items that are used to protect against infinite
	 * recursion and copies.
	 */
	protected serializeCache : ICarbyneCache

	/**
	 * The cache of deserialized items that are used to protect against infinite
	 * recursion and copies.
	 */
	protected deserializeCache : ICarbyneDesCache

	/**
	 * Used so we don't make unnecessary copies of symbols with the same ID.
	 */
	protected symbolIds : any

	/**
	 * The `ICarbyneStore` currently in use by the database.
	 */
	protected store : ICarbyneStore

	/**
	 * The registry of custom objects the database can use.
	 */
	protected customObjects : { [ name : string ] : ICarbyneCustomObjectConstructor }

	/**
	 * Create the database.
	 *
	 * @param {ICarbyneStore} store The store to use for the database.
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
	 * @param obj The object to serialize. Can be anything, honestly.
	 * @param {string} id The ID to give the new object. This is important.
	 * @returns {Promise<TCarbyneValue>} The serialized object.
	 */
	protected async serialize (
		obj : any,
		id : string
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
			if ( this.serializeCache[ obj._id ] ) {
				return this.serializeCache[ obj._id ]
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
					newObj.obj[ key ] = await this.serialize (
						value,
						await this.store.genID ()
					)
				}

				if ( type === 'object' ) {
					newObj.obj = {}

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
					newObj.obj = []

					for ( let i = 0, value ; value = obj[ i ], i < obj.length ; i++ ) {
						await addKV (
							i,
							value
						)
					}
				} else {
					newObj.obj = await obj.serialize ()
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
	 * Converts a `TCarbyneValue` into its primitive counterpart. Does not
	 * support references, objects, arrays, Symbols, or custom objects.
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
	 * @param {string | TCarbyneValue} obj The `string` ID or `TCarbyneValue`
	 * value to deserialize.
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
	 * Creates a Carbyne model from an object. Be advised this does wipe the
	 * database.
	 *
	 * @param obj The object to use as ID `'root'`.
	 * @param {ICarbyneStore} store The store to use. Defaults to
	 * `CarbyneMemoryStore`.
	 * @returns {Promise<Carbyne>}
	 */
	static async fromObject (
		obj : any,
		store? : ICarbyneStore
	) {
		const db = new Carbyne ( store )
		await db.clear ()

		await db.serialize (
			obj,
			'root'
		)

		return db
	}

	/**
	 * Clears the database, immediately and irreversibly dropping all data.
	 * `newObj` is optional and specifies what you want ID `'root'` to be
	 * replaced with. Defaults to empty object (`{}`)
	 *
	 * @returns {Promise<void>}
	 */
	async clear ( newObj? : any ) {
		await this.store.clear (
			newObj ? await this.serialize (
				newObj,
				'root'
			) : undefined
		)
	}

	/**
	 * Deserializes an object, specified by ID, value, or reference, and returns
	 * it.
	 *
	 *
	 * @param obj The object or ID to deserialize. Defaults to `'root'`.
	 * @returns {Promise<any>} The deserialized object.
	 */
	async toObject ( obj? : any ) {
		return await this.deserialize ( obj || 'root' )
	}

	/**
	 * Sets the key `key` of object `obj` to `value`. Pretty self-explanatory.
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
		if ( typeof obj === 'string' ) {
			obj = { _id : obj }
		} else if ( !obj._id ) {
			if ( obj.hasOwnProperty ( 'type' ) && obj.type === 'reference' && obj.hasOwnProperty ( 'data' ) ) {
				obj = { _id : obj.data }
			} else {
				throw new TypeError ( 'object does not exist in database' )
			}
		}

		const serialized = await this.serialize (
			value,
			await this.store.genID ()
		)

		await this.store.setKey (
			obj._id,
			key,
			serialized
		)

		if ( this.deserializeCache && this.deserializeCache.hasOwnProperty ( obj._id ) ) {
			( <TCarbyneDesObject> this.deserializeCache [ obj._id ] )[ key ] = await this.deserialize ( serialized )
		}
	}

	/**
	 * Resolves the ID of `obj`. Can take strings, references, and deserialized
	 * objects too.
	 *
	 * @param obj The object to resolve.
	 * @returns {Promise<string>} The resolved ID.
	 * @throws {TypeError} If the object does not exist in the database.
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
	 * honestly doesn't care.
	 *
	 * @param obj The object to target.
	 * @param {string | number} value The value to push to `obj`.
	 * @returns {Promise<void>}
	 */
	async push (
		obj : any,
		value : string | number
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
	 * be an ID, reference, or deserialized object.
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
	 * object.
	 *
	 * @param obj The object to target.
	 * @returns {Promise<any>} The data of `obj`.
	 */
	async getData ( obj : any ) {
		return await this.store.getData ( await Carbyne.resolveId ( obj ) )
	}

	/**
	 * Registers a new custom object. `name` is the `type`, and `cls` is the
	 * class (not an instance of it).
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
}