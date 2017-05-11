import React from 'react';

import Film from '../objects/Film';
import Location from '../objects/Location';
import Person from '../objects/Person';
import Species from '../objects/Species';
import Vehicle from '../objects/Vehicle';

import { getComponentName } from '../../helpers';

class ObjectListContainer extends React.Component {

	constructor() {
		super();

		this.state = {
			objects: {},
			objectComponent: ''
		};
	}

	componentDidMount() {
		const apiUrl = `https://ghibliapi.herokuapp.com${this.props.location.pathname}`,
			  responseData = fetch( apiUrl );

		let pathName = this.props.location.pathname.replace( '/', '' );

		this.setState({ 'objectComponent': getComponentName( pathName ) });

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

		switch ( this.state.objectComponent ) {
			case "Film": return <div key={key} className="object"><Film {...object} key={key} /></div>
			case "Location": return <div key={key} className="object"><Location {...object} /></div>
			case "Person": return <div key={key} className="object"><Person {...object} /></div>
			case "Species": return <div key={key} className="object"><Species {...object} /></div>
			case "Vehicle": return <div key={key} className="object"><Vehicle {...object} /></div>
		}
	};

}

export default ObjectListContainer;
