import React from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

const Home = () => {

	const classes = useStyles();

	return <section className={ classes.root }>
		<div className="hero"></div>
		<Container maxWidth="md">
			<h2 className="text-align">Welcome visitor</h2>
		</Container>
	</section>;

}

export default Home;
