import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

import logo from '../../../assets/images/logo.png';

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<Container maxWidth={false}>
				<Grid container justify='center'>
					<Grid item xs>
						<img className={classes.logo} src={logo} alt='Logo' />
						<Typography variant='h2'>
							Created with <span className='text-red-v'>❤</span> by Efrain
							Villanueva
						</Typography>
						<Typography variant='body1'>
							<a
								href='https://brittanychiang.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Design inspired by Brittany Chiang profile
							</a>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
};

export default Footer;
