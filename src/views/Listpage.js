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
			case "Film": return <section className="container"><FilmContainer /></section>
			case "Location": return <section className="container"><LocationContainer /></section>
			case "Person": return <section className="container"><PersonContainer /></section>
			case "Species": return <section className="container"><SpeciesContainer /></section>
			case "Vehicle": return <section className="container"><VehicleContainer /></section>
		}

	}

}

export default Listpage;
