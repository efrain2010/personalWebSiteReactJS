import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const Links = props => {

  const [ menuOpen, setMenuOpen ] = useState(false);

  const classes = useStyles();

  const onClickHandler = ( event ) => {
    const tempMenu = (event) ? true : false;
    setMenuOpen(tempMenu);
  };

  return <React.Fragment>
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <IconButton
        aria-label="menu"
        size="small"
        onClick={ () => onClickHandler(true) }
      >
        <MenuIcon />
      </IconButton>
    </Grid>
    <Collapse
      className={ classes.root }
      in={ menuOpen }
    >
      <nav>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <IconButton
            className={ classes.button }
            aria-label="menu"
            size="small"
            onClick={ () => onClickHandler(false) }
          >
            <CloseIcon
              fontSize="large"
            />
          </IconButton>
        </Grid>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              onClick={ () => onClickHandler(false) }
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              onClick={ () => onClickHandler(false) }
            >About</NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/resume"
              onClick={ () => onClickHandler(false) }
            >Resume</NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/services"
              onClick={ () => onClickHandler(false) }
            >Services</NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/skills"
              onClick={ () => onClickHandler(false) }
            >Skills</NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/projects"
              onClick={ () => onClickHandler(false) }
            >Projects</NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/blog" 
              onClick={ () => onClickHandler(false) }
            >
             Blog</NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contact"
              onClick={ () => onClickHandler(false) }
            >Contact</NavLink>
          </li>
        </ul>
      </nav>
    </Collapse>
  </React.Fragment>;
}

Links.propTypes = {
  type: PropTypes.string.isRequired
}

export default Links;
