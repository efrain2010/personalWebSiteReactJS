import React from 'react';
import Grid from '@material-ui/core/Grid';

import Title from '../../Common/Title';

import useStyles from './styles';

const ProjectsSection = () => {

  const classes = useStyles();

  return <section className={ classes.aboutMe }>
    <Grid container>
      <Title align="left" gutter={ true }>Some Of My Projects</Title>
    </Grid>
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
    >
    </Grid>
  </section>;

};

export default ProjectsSection;
