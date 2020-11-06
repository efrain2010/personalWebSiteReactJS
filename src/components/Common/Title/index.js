import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Title = props => {

  const classes = useStyles();

  return (
    <Typography
      className={ classes.root }
      variant={ props.type }
      gutterBottom={ props.gutter }
      >
      { props.children }
    </Typography>
  );
}

Title.propTypes = {
  type: PropTypes.string,
  gutter: PropTypes.bool
}

Title.defaultProps = {
  type: 'h2',
}

export default Title;
