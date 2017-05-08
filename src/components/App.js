import React from 'react';

import Header from './presentational/Header';

class App extends React.Component {

	render() {
		return (
			<div>
				<Header />

				<main className="main">
					{this.props.children}
				</main>

			</div>
		);
	}

}

export default App;
