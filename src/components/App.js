import React from 'react';

import Header from './presentational/Header';
import Main from './Main';

class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}

}

export default App;
