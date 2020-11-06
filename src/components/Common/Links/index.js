import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import useStyles from './styles';

const Links = props => {

  const classes = useStyles();

  return <React.Fragment>
    <nav className={ classes.root }>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
          >About</NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/experience"
          >Experience</NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/skills"
          >Skills</NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/projects"
          >Projects</NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/blog" 
          >
            Blog</NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
          >Contact</NavLink>
        </li>
      </ul>
    </nav>
  </React.Fragment>;
}

Links.propTypes = {
  type: PropTypes.string.isRequired
}

export default Links;
