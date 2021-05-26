import React from 'react';
import {Container, Grid, Chip} from '@material-ui/core';
import useStyle from './styles';

const Header = ({
  entry
}) => {
  const classes = useStyle();

  return (
    <header className={classes.hero} style={{ backgroundImage: `url(${entry.image})` }}>
      <Grid container justify='center'>
				<Grid item sm={10} xs={11}>			
					<Container maxWidth='md'>
            <h1>{entry.title}</h1>
            <div>
              {entry.author &&
                <>
                  <a className={classes.author} href={`mailto:${entry.author.email}`} >{entry.author.name}</a>
                  <div className={classes.avatar}><img src={entry.author.avatar} alt={`${entry.author.name}`} /></div>
                </>
              }
            </div>
            <div className={classes.postDetail}>
              <div>
                <Chip color="secondary" className="chip" label={entry.category} />
                <Chip color="secondary" className="chip" label={entry.date} />
              </div>
            </div>
          </Container>
        </Grid>
      </Grid>
    </header>
  )
};

export default Header;