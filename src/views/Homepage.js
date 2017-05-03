import React from 'react';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {

	render() {
		return (
			<section>
				<div className="linkbox">
					<Link to="/films">Films</Link>
				</div>
				<div className="linkbox">
					<Link to="/people">People</Link>
				</div>
				<div className="linkbox">
					<Link to="/locations">Locations</Link>
				</div>
				<div className="linkbox">
					<Link to="/species">Species</Link>
				</div>
				<div className="linkbox">
					<Link to="/vehicles">Vehicles</Link>
				</div>
			</section>
		)
	}

}

export default Homepage;
