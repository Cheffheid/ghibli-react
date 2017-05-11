import React from 'react';

import FilmContainer from '../components/containers/FilmContainer';
import LocationContainer from '../components/containers/LocationContainer';
import PersonContainer from '../components/containers/PersonContainer';
import SpeciesContainer from '../components/containers/SpeciesContainer';
import VehicleContainer from '../components/containers/VehicleContainer';

import { getComponentName } from '../helpers';

class Listpage extends React.Component {

	render() {
		const pathName = this.props.location.pathname.replace( '/', '' );

		switch ( getComponentName( pathName ) ) {
			case "Film": return <div className="container"><FilmContainer /></div>
			case "Location": return <div className="container"><LocationContainer /></div>
			case "Person": return <div className="container"><PersonContainer /></div>
			case "Species": return <div className="container"><SpeciesContainer /></div>
			case "Vehicle": return <div className="container"><VehicleContainer /></div>
		}

	}

}

export default Listpage;
