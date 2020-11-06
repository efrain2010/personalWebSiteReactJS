import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@global': {
    body: {
      backgroundColor: '#575757'
    },
    a: {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
    'nav a.active': {
      color: '#EC2B3D',
      textDecoration: 'none',
    },
  },
});

export default useStyles;
