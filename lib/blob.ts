import { ICarbyneCustomObject } from './types'

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

	async copy () {
		const newBuffer = Buffer.from ( [] )

		this.data.copy ( newBuffer )

		return new CarbyneBlob ( newBuffer )
	}
}