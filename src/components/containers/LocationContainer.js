import React from 'react';

import Location from '../cards/Location';

import api from '../../api';

class LocationContainer extends React.Component {

	constructor() {
		super();

		this.state = {
			objects: {},
		};
	}

	componentDidMount() {
		const apiUrl = `${api.url}/locations`,
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
				<ul>
					{objectKeys.map( this.renderObject )}
				</ul>
			)
		} else {
			return (
				<div>
					Nothing here!
				</div>
			)
		}
	}

	renderObject = ( key ) => {
		const object = this.state.objects[key];

		return <Location key={key} data={object} />
	}

}

export default LocationContainer;
