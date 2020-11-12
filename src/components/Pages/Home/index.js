import React, { useRef } from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WorkedSection from './WorkedSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

import useStyles from './styles';

export const sectionsRefs = {
	heroRef: {
		value: null,
		refHandler: null,
	},
	aboutRef: {
		value: null,
		refHandler: null,
	},
	workRef: {
		value: null,
		refHandler: null,
	},
	projectsRef: {
		value: null,
		refHandler: null,
	},
	contactRef: {
		value: null,
		refHandler: null,
	},
};

const Home = () => {
	sectionsRefs.heroRef.value = useRef(null);
	sectionsRefs.aboutRef.value = useRef(null);
	sectionsRefs.workRef.value = useRef(null);
	sectionsRefs.projectsRef.value = useRef(null);
	sectionsRefs.contactRef.value = useRef(null);

	sectionsRefs.heroRef.refHandler = () =>
		sectionsRefs.heroRef.value.current.scrollIntoView();
	sectionsRefs.aboutRef.refHandler = () =>
		sectionsRefs.aboutRef.value.current.scrollIntoView();
	sectionsRefs.workRef.refHandler = () =>
		sectionsRefs.workRef.value.current.scrollIntoView();
	sectionsRefs.projectsRef.refHandler = () =>
		sectionsRefs.projectsRef.value.current.scrollIntoView();
	sectionsRefs.contactRef.refHandler = () =>
		sectionsRefs.contactRef.value.current.scrollIntoView();

	const classes = useStyles();

	return (
		<React.Fragment>
			<Container className={classes.root} maxWidth='md'>
				<HeroSection refProp={sectionsRefs.heroRef.value} />
				<AboutSection refProp={sectionsRefs.aboutRef.value} />
				<WorkedSection refProp={sectionsRefs.workRef.value} />
				<ProjectsSection refProp={sectionsRefs.projectsRef.value} />
				<ContactSection refProp={sectionsRefs.contactRef.value} />
			</Container>
		</React.Fragment>
	);
};

export default Home;
