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
			case "Film": 
				return ( 
					<section className="container">
						<h2>Films</h2>
						<FilmContainer />
					</section>
				);
				break;
			case "Location": 
				return ( 
					<section className="container">
						<h2>Locations</h2>
						<LocationContainer />
					</section>
				);
				break;
			case "Person": 
				return ( 
					<section className="container">
						<h2>People</h2>
						<PersonContainer />
					</section>
				);
				break;
			case "Species": 
				return ( 
					<section className="container">
						<h2>Species</h2>
						<SpeciesContainer />
					</section>
				);
				break;
			case "Vehicle": 
				return ( 
					<section className="container">
						<h2>Vehicles</h2>
						<VehicleContainer />
					</section>
				);
				break;
		}

	}

}

export default Listpage;
