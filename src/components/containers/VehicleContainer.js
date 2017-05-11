import React from 'react';

import api from '../../api';

class VehicleContainer extends React.Component {

	constructor() {
		super();

		this.state = {
			objects: {},
		};
	}

	componentDidMount() {
		const apiUrl = `${api.url}/vehicles`,
			  responseData = fetch( apiUrl );

		responseData.then( ( response ) => response.json() )
					.then( ( data ) => this.setState( { objects: data } ) )
					.catch( ( error ) => console.error( error ) );
	}

	render() {
		const objectKeys = Object.keys( this.state.objects ),
		objectCount = objectKeys.length;

		if ( objectCount > 0 ) {
			return (
				<section>
					{objectKeys.map( this.renderObject )}
				</section>
			)
		} else {
			return (
				<section>
					Nothing here!
				</section>
			)
		}
	}

	renderObject = ( key ) => {
		const object = this.state.objects[key];

		return object.name
	}

}

export default VehicleContainer;
