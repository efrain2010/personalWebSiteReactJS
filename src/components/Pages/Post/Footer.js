import React from 'react';
import { Chip } from '@material-ui/core';
import useStyles from './styles';

const Footer = ({ category, author }) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      {author && (
        <div>
          <figure>
            {/* Implement link to all posts of this author */}
            <a href="#efra-link">
              <img src={author.avatar} alt={author.name} />
            </a>
          </figure>
          <h3>
            <a href="#efra-link">{author.name}</a>
          </h3>
        </div>
      )}
      <div>
        <Chip label={category} />
      </div>
    </div>
  );
};

export default Footer;
