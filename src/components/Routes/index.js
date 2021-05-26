import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Post from '../Pages/Post';

class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:slug" component={Post} />
        <Route path="/login" component={Post} />
      </>
    );
  }
}

export default Routes;
