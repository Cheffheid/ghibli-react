import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Homepage from './views/Homepage';
import Films from './views/Films';

const Root = () => {
	return (
		<BrowserRouter>
			<App>
				<Route exact path="/" component={Homepage} />
			</App>
		</BrowserRouter>
	)
}

render( <Root/>, document.getElementById('root') );
