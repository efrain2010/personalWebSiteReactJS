import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const HeroSection = () => {

	const classes = useStyles();

	return <section className={ classes.hero }>
		<Container maxWidth="md">
			<Grid container>
				<Grid item xs={ 8 }>
					<Typography
						variant="h2"
					>
						Hey there! I'm <strong className="text-red-v">Efrain Villanueva</strong>
					</Typography>
					<Typography
						variant="h1"
					>
						A fullstack web developer
					</Typography>
					<Typography
						variant="h3"
					>
						Want to know why you should hire me?
					</Typography>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</Container>
	</section>;

}

export default HeroSection;
