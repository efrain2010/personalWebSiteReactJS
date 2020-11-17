import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';

// import Routes from '../Routes';
import Home from '../Pages/Home';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SocialMedia from '../Common/SocialMedia';

import { darkTheme } from './styles';

const Layout = (props) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Header />
				<main>
					<Grid container justify='center'>
						<Grid item sm={10} xs={11}>
							<Home />
						</Grid>
					</Grid>
				</main>
				<Footer />
				{!isWidthDown('xs', props.width) ? <SocialMedia /> : null}
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default withWidth()(Layout);
