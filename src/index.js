import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './views/Homepage';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exactly pattern="/" component={Homepage} />
			</div>
		</BrowserRouter>
	)
}

render( <Root/>, document.getElementById('root') );
