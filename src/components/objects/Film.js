import React from 'react';
import { Link } from 'react-router-dom'

class Film extends React.Component {

	render() {
		return (
			<li className="film">
				<h2>
					<Link to={`/film/${this.props.data.id}`}>
						{this.props.data.title}
					</Link>
				</h2>
				<p class="meta">
					{this.props.data.release_date}, {this.props.data.director}
				</p>
			</li>
		)
	}

}

export default Film;
