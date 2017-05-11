import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ObjectListContainer from './ObjectListContainer';
import Homepage from '../../views/Homepage';

class Main extends React.Component {

	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/:objectType" component={ObjectListContainer} />
				</Switch>
			</main>
		);
	}

}

export default Main;
