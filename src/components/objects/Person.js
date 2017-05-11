import React from 'react';

class Person extends React.Component {

	render() {
		return (
			<li className="person">
				{this.props.data.name}
			</li>
		)
	}

}

export default Person;
