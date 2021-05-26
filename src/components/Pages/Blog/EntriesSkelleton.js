import React from 'react';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

import useStyles from './styles';

const EntriesTemplate = ({ blogEntries, isLoading }) => {
  const classes = useStyles();

  const entries = blogEntries;
  let cont = 0;

  const getColSpace = () => {
    let colSpace = 12;

    if (cont === 0) {
      colSpace = 12;
    } else if (cont < 2 || cont > 5) {
      colSpace = 6;
    } else {
      colSpace = 3;
    }

    if (cont === 7) {
      cont = 1;
    }

    cont += 1;

    return colSpace;
  };

  return entries.map((entry, index) => {
    return (
      <Grid key={`blog-entries-key-${index}`} item xs={getColSpace()}>
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rect"
            width="100%"
            height={280}
          />
        ) : (
          <NavLink
            className={classes.entry}
            exact
            to={`/blog/${entry.slug}`}
            style={{
              backgroundImage: `url(${entry.image})`,
            }}
          >
            <h2>{entry.title}</h2>
            <h3>{entry.author.name}</h3>
          </NavLink>
        )}
      </Grid>
    );
  });
};

export default EntriesTemplate;
