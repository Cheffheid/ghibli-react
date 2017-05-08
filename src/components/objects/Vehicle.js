import React from 'react';

class Vehicle extends React.Component {

	render() {
		return (
			<div className="object vehicle">
				{this.props.name}
			</div>
		)
	}

}

export default Vehicle;
