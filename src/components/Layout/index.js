import React from 'react';
import { darkTheme } from './styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../Routes';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const Layout = () => (
  <ThemeProvider theme={ darkTheme }>
    <CssBaseline/>
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes />
      </main>
      <Footer></Footer>
    </BrowserRouter>
  </ThemeProvider>
);

export default Layout;
