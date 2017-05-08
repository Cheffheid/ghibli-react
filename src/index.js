import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import ObjectListContainer from './components/containers/ObjectListContainer';
import Homepage from './views/Homepage';

const Root = () => {
	return (
		<BrowserRouter>
			<App>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/:objectType" component={ObjectListContainer} />
			</App>
		</BrowserRouter>
	)
}

render( <Root/>, document.getElementById('root') );
