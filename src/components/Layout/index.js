import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from '../Routes';
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
          <Routes />
        </main>
        <Footer />
        {!isWidthDown('xs', props.width) ? <SocialMedia /> : null}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default withWidth()(Layout);
