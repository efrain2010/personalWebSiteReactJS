import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

const Links = props => {

  const classes = useStyles();

  const spacing = ( props.space === undefined ) ? 2 : props.space;

  return <nav class="nav-menu">
    <Grid 
      className={ classes.nav } 
      item 
      xs 
      container 
      direction={ props.alingment } 
      spacing={ spacing }
      justify="center"
      alignItems="center"
    >
      <Grid item xs>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item xs>
        <Link to="/about">About</Link>
      </Grid>
      <Grid item xs>
        <Link to="/resume">Resume</Link>
      </Grid>
      <Grid item xs>
        <Link to="/services">Services</Link>
      </Grid>
      <Grid item xs>
        <Link to="/skills">Skills</Link>
      </Grid>
      <Grid item xs>
        <Link to="/projects">Projects</Link>
      </Grid>
      <Grid item xs>
        <Link to="/blog">My Blog</Link>
      </Grid>
      <Grid item xs>
        <Link to="/contact">Contact</Link>
      </Grid>
    </Grid>
  </nav>;
}

export default Links;
