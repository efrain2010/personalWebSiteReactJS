import React from 'react';
import { NavLink } from 'react-router-dom';

import useStyles from './styles';

const Links = props => {

  const spacing = ( props.space === undefined ) ? 2 : props.space;

  const classes = useStyles();

  return <nav class={ classes.root }>
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/about">About</NavLink>
      </li>
      <li>
        <NavLink exact to="/resume">Resume</NavLink>
      </li>
      <li>
        <NavLink exact to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink exact to="/skills">Skills</NavLink>
      </li>
      <li>
        <NavLink exact to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink exact to="/blog">My Blog</NavLink>
      </li>
      <li>
        <NavLink exact to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>;
}

export default Links;
