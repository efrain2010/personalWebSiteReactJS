import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Title from  '../../Common/Title';

import useStyles from './styles';

const AboutSection = () => {

	const classes = useStyles();

	return <section className={ classes.aboutMe }>
    <Grid container>
      <Title align="left" gutter={ true }>About Me</Title>
    </Grid>
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={ 8 }>          
        <Typography
          align="center"
          variant="h5"
          variantMapping={{h5: 'p'}}
        >
          I'm a <strong>Fullstack Web Developer</strong> based in Scotland with 6 years of professional experience. I'm interested in different kind of projects like mobile, desktop and game development, but mainly in web development.
          <br/>
          ... write more
        </Typography>
        </Grid>
    </Grid>
	</section>;

}

export default AboutSection;