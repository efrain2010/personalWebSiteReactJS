import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router';
import { getPostBySlug } from '../../../constants/blogEntries';
import useStyle from './styles';
import Header from './Header';
import Footer from './Footer';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Post = () => {
  const slug = useParams();
  const [entry, setEntry] = useState({});
  const classes = useStyle();

  useEffect(() => {
    setEntry(getPostBySlug(slug.slug));
  }, [slug]);

  return (
    <>
      <Header entry={entry} />
      <main className={classes.body}>
        <Grid container justify="center">
          <Grid item sm={10} xs={11}>
            <Container maxWidth="md">{entry.body}</Container>
            <aside className={classes.socials}>
              <IconButton aria-label="Facebook share Button">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter share Button">
                <TwitterIcon />
              </IconButton>
            </aside>
          </Grid>
        </Grid>
      </main>
      <Footer category={entry.category} author={entry.author} />
      {/* Add a widget for more posts */}
    </>
  );
};

export default Post;
