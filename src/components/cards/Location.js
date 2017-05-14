import React from 'react';
import { Link } from 'react-router-dom'

class Location extends React.Component {

	render() {
		return (
			<li className="location">
				<h2>
					<Link to={`/location/${this.props.data.id}`}>
						{this.props.data.name}
					</Link>
				</h2>
				<p class="meta">
					{this.props.data.climate}, {this.props.data.terrain}
				</p>
			</li>
		)
	}

}

export default Location;
