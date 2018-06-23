import * as fs                                           from 'fs-extra'
import * as msgpack                                      from 'msgpack-lite'
import * as path                                         from 'path'
import * as uuid                                         from 'uuid'
import { ICarbyneStore, TCarbyneTypeObj, TCarbyneValue } from '../index'

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * A store that uses a directory to store data rather than memory or a single
 * file. Example:
 *
 * ```typescript
 * import { Carbyne, CarbyneDirectoryStore } from 'carbyne-db'
 *
 * const store = new CarbyneDirectoryStore ( 'test-db' )
 * const db = new Carbyne ( store )
 *
 * // hurray!
 * ```
 */
export class CarbyneDirectoryStore implements ICarbyneStore {
	protected dirName : string

	/**
	 * Initialize the store with the given `dirName`.
	 *
	 * @param {string} dirName
	 */
	constructor (
		dirName : string
	) {
		this.dirName = path.normalize ( dirName )
	}

	/**
	 * Packs an object into a packed format for storage.
	 * @param obj
	 * @returns {Promise}
	 */
	protected static async pack ( obj : any ) {
		return msgpack.encode ( obj )
	}

	/**
	 * Unpacks an object encoded in a packed format.
	 * @param buf
	 * @returns {Promise}
	 */
	protected static async unpack ( buf : Buffer ) {
		return msgpack.decode ( buf )
	}

	/**
	 * Gets the directory an object is stored in.
	 * @param {string} id
	 * @returns {Promise<string>}
	 */
	protected async getObjectDir ( id : string ) {
		if ( id === 'root' ) {
			return path.join (
				this.dirName,
				'root'
			)
		}

		return path.join (
			this.dirName,
			'objects',
			id
		)
	}

	async clear () {
		await fs.emptyDir ( this.dirName )
	}

	async genID () {
		return uuid.v4 ()
	}

	async setRef (
		id : string,
		obj : any
	) {
		const dir = await this.getObjectDir ( id )

		await fs.mkdirp (
			dir
		)

		await fs.writeFile (
			path.join (
				dir,
				'type'
			),
			obj.type,
			'utf8'
		)

		if ( obj.type === 'object' || obj.type === 'array' ) {
			await fs.mkdirp (
				path.join (
					dir,
					'keys'
				)
			)
		}

		const addKV = async (
			key : string | number,
			value : any
		) => {
			await this.setKey (
				id,
				key,
				value
			)
		}

		switch ( obj.type ) {
			case 'symbol':
				return
			case 'object':
				const keys = Object.keys ( obj.obj )

				for ( let i = 0, key ; key = keys[ i ], i < keys.length ; i++ ) {
					await addKV (
						key,
						obj.obj[ key ]
					)
				}

				break
			case 'array':
				for ( let i = 0, value ; value = obj.obj[ i ], i < obj.obj.length ; i++ ) {
					await addKV (
						i,
						value
					)
				}

				break
			default:
				await fs.writeFile (
					path.join (
						await this.getObjectDir ( id ),
						'data'
					),
					await CarbyneDirectoryStore.pack ( obj.data )
				)
		}
	}

	async getKey (
		id : string,
		key : number | string
	) {
		return await CarbyneDirectoryStore.unpack (
			await fs.readFile (
				path.join (
					await this.getObjectDir ( id ),
					'keys',
					key.toString ()
				)
			)
		)
	}

	async setKey (
		id : string,
		key : number | string,
		value : TCarbyneValue
	) {
		const keysDir = path.join (
			await this.getObjectDir ( id ),
			'keys'
		)

		await fs.mkdirp ( keysDir )

		await fs.writeFile (
			path.join (
				keysDir,
				key.toString ()
			),
			await CarbyneDirectoryStore.pack ( value )
		)
	}

	async getType ( id : string ) {
		return <TCarbyneTypeObj> await fs.readFile (
			path.join (
				await this.getObjectDir ( id ),
				'type'
			),
			'utf8'
		)
	}

	async getLength ( id : string ) {
		return ( await this.getKeys ( id ) ).length
	}

	async getKeys ( id : string ) {
		return await fs.readdir ( path.join (
			await this.getObjectDir ( id ),
			'keys'
		) )
	}

	async push (
		id : string,
		value : TCarbyneValue
	) {
		await this.setKey (
			id,
			await this.getLength ( id ),
			value
		)
	}

	async getData ( id : string ) {
		return await CarbyneDirectoryStore.unpack (
			await fs.readFile (
				path.join (
					await this.getObjectDir ( id ),
					'data'
				)
			)
		)
	}

	async setData (
		id : string,
		value : TCarbyneValue
	) {
		await fs.writeFile (
			path.join (
				await this.getObjectDir ( id ),
				'data'
			),
			await CarbyneDirectoryStore.pack ( value )
		)
	}

	async delKey (
		id : string,
		key : number | string
	) {
		await fs.unlink (
			path.join (
				await this.getObjectDir ( id ),
				'keys',
				key.toString ()
			)
		)
	}

	async hasKey (
		id : string,
		key : number | string
	) {
		try {
			await fs.access (
				path.join (
					await this.getObjectDir ( id ),
					'keys',
					key.toString ()
				),
				fs.constants.F_OK
			)

			return true
		} catch {
			return false
		}
	}

	async supportsKeys ( id : string ) {
		try {
			const type = await this.getType ( id )

			return type === 'object' || type === 'array'
		} catch {
			return false
		}
	}
}