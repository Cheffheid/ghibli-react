import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

	render() {
		return (
			<nav>
				<ul>
					<li><NavLink to="/" activeClassName="active">Home</NavLink></li>
					<li><NavLink to="/films" activeClassName="active">Films</NavLink></li>
					<li><NavLink to="/people" activeClassName="active">People</NavLink></li>
					<li><NavLink to="/locations" activeClassName="active">Locations</NavLink></li>
					<li><NavLink to="/species" activeClassName="active">Species</NavLink></li>
					<li><NavLink to="/vehicles" activeClassName="active">Vehicles</NavLink></li>
				</ul>
			</nav>
		)
	}

}

export default Navigation;
