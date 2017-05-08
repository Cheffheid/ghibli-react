import React from 'react';

class Person extends React.Component {

	render() {
		return (
			<div className="object person">
				{this.props.name}
			</div>
		)
	}

}

export default Person;
