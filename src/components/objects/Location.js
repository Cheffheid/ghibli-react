import React from 'react';

class Location extends React.Component {

	render() {
		return (
			<div className="object location">
				{this.props.name}
			</div>
		)
	}

}

export default Location;
