import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#565656',
    },
    secondary: {
      main: '#EC2B3D',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem'
    },
    h2: {
      fontSize: '2.5rem'
    },
    h3: {
      fontSize: '2rem'
    }
  }
});

export {
  darkTheme
};
