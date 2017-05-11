import React from 'react';

class Vehicle extends React.Component {

	render() {
		return (
			<li className="vehicle">
				{this.props.data.name}
			</li>
		)
	}

}

export default Vehicle;
