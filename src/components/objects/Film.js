import React from 'react';

class Film extends React.Component {

	render() {
		return (
			<li className="film">
				{this.props.data.title}
			</li>
		)
	}

}

export default Film;
