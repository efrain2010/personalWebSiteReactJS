import React from 'react';
import { Element } from 'react-scroll';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const HeroSection = () => {
	const classes = useStyles();

	return (
		<Element name='homeHeroSection' className={classes.hero}>
			<Grid container direction='row' justify='flex-start' alignItems='center'>
				<Grid item xs={12}>
					<Typography variant='body1'>Hey there! I'm</Typography>
					<Typography variant='h2'>
						<strong className='text-red-v'>Efraín Villanueva</strong>
					</Typography>
					<Typography variant='h1'>
						A Full Stack
						<br />
						Web Developer
					</Typography>
					<Grid item sm={8} xs={12}>
						<Typography variant='h5' gutterBottom={true} paragraph={true}>
							I'm a software developer currently based in Glasgow, Scotland
							specialized in creating astonishing webpages and webapps.
						</Typography>
					</Grid>
					<Button
						className='neon-btn'
						variant='outlined'
						color='secondary'
						href='mailto:efrain.villanueva3@gmail.com'
					>
						Let's Talk
					</Button>
				</Grid>
			</Grid>
		</Element>
	);
};

export default HeroSection;
