import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const HeroSection = () => {

	const classes = useStyles();

	return <section 
		className={ classes.hero } id="homeHeroSection"
	>
		<Container maxWidth="md">
			<Grid 
				container 
				direction="row" 
				className={ classes.fitToScreen } 
				justify="flex-start" 
				alignItems="center"
			>
				<Grid item xs>
					<Typography
						variant="body1"
					>Hey there! I'm</Typography>
					<Typography
						variant="h2"
					>
						<strong className="text-red-v">Efrain Villanueva</strong>
					</Typography>
					<Typography
						variant="h1"
						gutterBottom={ true }
					>
						A Full Stack<br/>
						Web Developer
					</Typography>
					<Typography
						variant="h5"
						gutterBottom={ true }
						paragraph={ true }
					>
						I'm a software developer based in Glasgow, Scotland specialized in creating astonoshing webpages and webapps.
					</Typography>
					<Button 
						className={ classes.letsTalkBtn }
						variant="outlined" 
						color="secondary"
						href="mailto:efrain.villanueva3@gmail.com"
					>
						Let's talk
					</Button>
				</Grid>
			</Grid>
		</Container>
	</section>;

}

export default HeroSection;
