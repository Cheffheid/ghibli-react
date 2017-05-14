import React from 'react';
import { Link } from 'react-router-dom'

class Vehicle extends React.Component {

	render() {
		return (
			<li className="vehicle">
				<h2>
					<Link to={`/species/${this.props.data.id}`}>
						{this.props.data.name}
					</Link>
				</h2>
				<p class="meta">
					{this.props.data.vehicle_class}
				</p>
			</li>
		)
	}

}

export default Vehicle;
