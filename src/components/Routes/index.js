import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from '../Pages/Home';
import Blog from '../Pages/Blog';

class Routes extends Component {
	render() {
		return (
			<React.Fragment>
				<Route path='/' exact component={Home} />
				<Route path='/blog' exact component={Blog} />
			</React.Fragment>
		);
	}
}

export default Routes;
