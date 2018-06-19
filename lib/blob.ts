import { ICarbyneCustomObject } from './index'

/**
 * Our own custom object. Blobs have absolutely *no* special handling, and
 * Carbyne treats them just like any other custom object.
 * [[Carbyne.registerCustomObject]] can be used to register your own custom
 * objects.
 */
export class CarbyneBlob implements ICarbyneCustomObject {
	public _id : any

	constructor (
		protected data : Buffer,
		_id? : string
	) {
		if ( _id ) {
			Object.defineProperty (
				this,
				'_id',
				{ value : _id }
			)
		}
	}

	async serialize () {
		return this.data
	}

	/**
	 * Copies this `CarbyneBlob`, returning a new one representing a copy of the
	 * same data.
	 *
	 * Equivalent to:
	 *
	 * ```typescript
	 * const newBuffer = Buffer.from ( [] )
	 *
	 * this.data.copy ( newBuffer )
	 *
	 * return new CarbyneBlob ( newBuffer )
	 * ```
	 *
	 * @returns {Promise<CarbyneBlob>}
	 */
	async copy () {
		const newBuffer = Buffer.from ( [] )

		this.data.copy ( newBuffer )

		return new CarbyneBlob ( newBuffer )
	}
}