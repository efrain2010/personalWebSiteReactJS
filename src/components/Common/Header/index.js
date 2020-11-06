import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import Links from '../Links';

import useStyles from './styles';
import logo from '../../../assets/images/logo.png';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = props => {

	const classes = useStyles();

	return <HideOnScroll {...props}>
		<header className={ classes.root }>
			<Container maxWidth={ false }>
				<Grid container alignItems="center" spacing={ 3 }>
					<Grid item xs={ 2 }>
						<NavLink
							className={ classes.logo }
							exact
							to="/"
						>
							<img src={ logo } alt="Logo" />
						</NavLink>
					</Grid>
					<Grid item xs={ 10 }>
						<Grid container justify="flex-end" spacing={ 3 }>
							<Links 
								className={ classes.nav }
								type="hidden"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</header>
	</HideOnScroll>
}

export default Header;
