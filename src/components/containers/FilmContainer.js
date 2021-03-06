import React from 'react';

import Film from '../cards/Film';

import api from '../../api';

class FilmContainer extends React.Component {

	constructor() {
		super();

		this.state = {
			objects: {},
		};
	}

	componentDidMount() {
		const apiUrl = `${api.url}/films`,
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

		return <Film key={key} data={object} />
	}

}

export default FilmContainer;
