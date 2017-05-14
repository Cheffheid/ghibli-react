import React from 'react';

import Person from '../cards/Person';

import api from '../../api';

class PersonContainer extends React.Component {

	constructor() {
		super();

		this.state = {
			objects: {},
		};
	}

	componentDidMount() {
		const apiUrl = `${api.url}/people`,
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

		return <Person key={key} data={object} />
	}

}

export default PersonContainer;
