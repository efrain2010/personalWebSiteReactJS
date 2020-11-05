import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const IntroductionSection = () => {

	const classes = useStyles();

	return <section className={ classes.aboutMe }>
		<Container maxWidth="md">
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Grid item xs={ 8 }>
          <Typography
            align="center"
            variant="h2"
            gutterBottom={ true }
          >
            About Me
          </Typography>
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
		</Container>
	</section>;

}

export default IntroductionSection;
