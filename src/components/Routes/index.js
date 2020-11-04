import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Counter from '../Common/Counter';
import Hireme from '../Pages/Hireme';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Services from '../Pages/Services';
import Skills from '../Pages/Skills';

class Routes extends Component {
  render() {
    return <React.Fragment>
      <Route path="/" exact component={ Home } />
      <Route path="/about" exact component={ About } />
      <Route path="/resume" exact component={ Resume } />
      <Route path="/services" exact component={ Services } />
      <Route path="/skills" exact component={ Skills } />
      <Route path="/projects" exact component={ Projects } />
      <Route path="/blog" exact component={ Blog } />
      <Route path="/counter" exact component={ Counter } />
      <Route path="/hireme" exact component={ Hireme } />
      <Route path="/contact" exact component={ Contact } />
    </React.Fragment>
  }
}

export default Routes;
