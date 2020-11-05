import React from 'react';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Links from '../Links';

import useStyles from './styles';
import logo from '../../../assets/images/logo.png';

const Header = props => {

	const classes = useStyles();

	return <header className={ classes.root }>
		<Container maxWidth="lg">
			<Grid container spacing={ 3 }>
				<Grid item xs={ 3 }>
					<NavLink
						className={ classes.logo }
						exact
						to="/"
					>
						<span>
							<img src={ logo } alt="Logo" /> 
						</span>
					</NavLink>
				</Grid>
				<Grid item xs></Grid>
				<Grid item xs={ 1 }>
					<Links 
						className={ classes.nav }
						type="hidden"
					/>
				</Grid>
			</Grid>
		</Container>
	</header>
}

export default Header;
