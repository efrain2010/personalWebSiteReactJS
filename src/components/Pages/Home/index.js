import React from 'react';
import {Container, Grid} from '@material-ui/core';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WorkedSection from './WorkedSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

import useStyles from './styles';

const Home = () => {
	const classes = useStyles();

	return (
		<>
			<Grid container justify='center'>
				<Grid item sm={10} xs={11}>			
					<Container className={classes.root} maxWidth='md'>
						<HeroSection />
						<AboutSection />
						<WorkedSection />
						<ProjectsSection />
						<ContactSection />
					</Container>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
