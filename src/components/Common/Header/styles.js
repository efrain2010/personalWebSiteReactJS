import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(),
    '& nav':{
      paddingTop: 24,
    },
  },
  logo: {
    '& h2': {
      fontSize: 18,
      display: 'inline-block',
      marginLeft: theme.spacing()
    },
      '& img': {
      maxWidth: 30
    },
  },
  nav: {
    paddingTop: 20
  },
}));

export default useStyles;
