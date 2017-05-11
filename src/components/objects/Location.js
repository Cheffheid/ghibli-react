import React from 'react';

class Location extends React.Component {

	render() {
		return (
			<li className="location">
				{this.props.data.name}
			</li>
		)
	}

}

export default Location;
