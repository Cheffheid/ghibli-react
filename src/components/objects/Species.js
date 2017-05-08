import React from 'react';

class Species extends React.Component {

	render() {
		return (
			<div className="object species">
				{this.props.name}
			</div>
		)
	}

}

export default Species;
