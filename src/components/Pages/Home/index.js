import React from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WorkedSection from './WorkedSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

import useStyles from './styles';

const Home = () => {

	const classes = useStyles();

	return <React.Fragment>
		<Container className={ classes.root } maxWidth="md">
			<HeroSection />
			<AboutSection />
			<WorkedSection />
			<ProjectsSection />
			<ContactSection />
		</Container>
	</React.Fragment>;

}

export default Home;
