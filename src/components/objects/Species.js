import React from 'react';
import { Link } from 'react-router-dom'

class Species extends React.Component {

	render() {
		return (
			<li className="species">
				<h2>
					<Link to={`/species/${this.props.data.id}`}>
						{this.props.data.name}
					</Link>
				</h2>
				<p class="meta">
					{this.props.data.classification}
				</p>
			</li>
		)
	}

}

export default Species;
