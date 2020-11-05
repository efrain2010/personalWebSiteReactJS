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
});

export {
  darkTheme
};
