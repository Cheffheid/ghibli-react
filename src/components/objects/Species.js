import React from 'react';

class Species extends React.Component {

	render() {
		return (
			<li className="species">
				{this.props.data.name}
			</li>
		)
	}

}

export default Species;
