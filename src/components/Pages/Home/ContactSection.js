import React from 'react';
import { Element } from 'react-scroll';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Title from '../../Common/Title';

import useStyles from './styles';

import Button from '@material-ui/core/Button';

const ContactSection = () => {
  const classes = useStyles();

  const sectionName = 'homeContactSection';

  return (
    <Element
      id={sectionName}
      name={sectionName}
      className={classes.contact}
    >
      <Grid container>
        <Title align="center" gutter={true}>
          Let's Build Something Awesome
        </Title>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item sm={8} xs={12}>
          <Typography variant="body1" align="center">
            Currenlty I am looking for an opprotunity that allows me
            to stay and make a life in the UK, however, send me a
            message if you want to build something togheter, or simply
            chat or ask a question.
          </Typography>
          <Typography variant="body1" align="center">
            <Button
              className="neon-btn"
              variant="outlined"
              color="secondary"
              href="mailto:efrain.villanueva3@gmail.com"
            >
              Write me
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Element>
  );
};

export default ContactSection;
