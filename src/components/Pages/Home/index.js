import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

const Home = () => {

	const classes = useStyles();
	
	return <section className={ classes.root }>
		<div className="hero">
			<Container maxWidth="md">
				<Grid container spacing={ 2 }>
					<Grid item xs>
						<h2>Welcome visitor</h2>
					</Grid>
					<Grid item xs>
					</Grid>
				</Grid>
			</Container>
		</div>
		<Container maxWidth="md">
			<h2 className="text-align">About Me</h2>
		</Container>
	</section>;

}

export default Home;
