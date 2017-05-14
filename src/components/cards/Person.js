import React from 'react';
import { Link } from 'react-router-dom'

class Person extends React.Component {

	render() {
		return (
			<li className="person">
				<h2>
					<Link to={`/person/${this.props.data.id}`}>
						{this.props.data.name}
					</Link>
				</h2>
				<p class="meta">
					{this.props.data.gender}, {this.props.data.age}
				</p>
			</li>
		)
	}

}

export default Person;
