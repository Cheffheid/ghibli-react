import React from 'react';

class FilmContainer extends React.Component {

	constructor() {
		super();

		this.state = {
			objects: {},
		};
	}

	componentDidMount() {
		const apiUrl = `https://ghibliapi.herokuapp.com${this.props.location.pathname}`,
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

	renderObject( key ) {
		const object = this.state.objects[key];

		return object.title
	}

}

export default FilmContainer;
