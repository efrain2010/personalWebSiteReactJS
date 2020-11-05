import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Links from '../Links';

import useStyles from './styles';
import logo from '../../../assets/images/logo.png';

const Header = () => {

	const classes = useStyles();

	return <header className={ classes.root }>
		<Container maxWidth="lg">
			<Grid container spacing={ 3 }>
				<Grid item xs={ 3 }>
					<a href="/" className={ classes.logo }>
						<span>
							<img src={ logo } alt="Logo" /> 
							<h2>Efraín Villanueva</h2>
						</span>
					</a>
				</Grid>
				<Grid item xs></Grid>
				<Grid item xs={ 7 }>
					<Hidden mdDown>
						<button>Menu</button>
					</Hidden>
					<Links className={ classes.nav }
						alingment="row"
						space={ 1 }
					/>
				</Grid>
			</Grid>
		</Container>
	</header>
}

export default Header;
