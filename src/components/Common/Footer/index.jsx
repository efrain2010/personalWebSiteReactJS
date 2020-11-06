import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

import logo from '../../../assets/images/logo.png';

const Footer = () => {

	const classes = useStyles();

	return <footer className={ classes.root }>
		<Container maxWidth={ false }>
			<Grid container>
				<Grid item xs={ 7 }>
					<img className={ classes.logo } src={ logo } alt="Logo" />
				</Grid>
				<Grid item xs>
					<h2 style={{margin: 0}}>Want to contact me?</h2>
					<p><a href="tel:+4407949782401">+44 079 4978 2401</a></p>
					<p><a href="mailto:efrain.villanueva3@gmail.com">efrain.villanueva3@gmail.com</a></p>
				</Grid>
			</Grid>
		</Container>
	</footer>;

};

export default Footer;
