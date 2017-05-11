import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from '../../views/Listpage';
import Homepage from '../../views/Homepage';

class Main extends React.Component {

	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/:objectType" component={ListPage} />
				</Switch>
			</main>
		);
	}

}

export default Main;
