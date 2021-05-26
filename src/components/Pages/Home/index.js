import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WorkedSection from './WorkedSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== '') {
      scroller.scrollTo(hash.replace('#', ''));
    }
  }, []);

  return (
    <>
      <Grid container justify="center">
        <Grid item sm={10} xs={11}>
          <Container className={classes.root} maxWidth="md">
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
