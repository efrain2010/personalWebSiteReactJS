import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Post from '../Pages/Post';

class Routes extends Component {
	render() {
		return (
			<React.Fragment>
				<Route path='/' exact component={Home} />
				<Route path='/blog' exact component={Blog} />
				<Route path='/blog/:slug' component={Post} />
			</React.Fragment>
		);
	}
}

export default Routes;
