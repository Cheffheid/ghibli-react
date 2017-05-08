import React from 'react';

class Film extends React.Component {

	render() {
		return (
			<div className="film">
				{this.props.title}
			</div>
		)
	}

}

export default Film;
