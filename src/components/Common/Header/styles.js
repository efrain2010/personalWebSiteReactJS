import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    position: 'fixed',
    width: '100%',
    zIndex: 9,
  },
  scrolled: {
    backgroundColor: '#303030',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  logo: {
    '& h2': {
      fontSize: 18,
      display: 'inline-block',
      marginLeft: theme.spacing()
    },
    '& img': {
      maxWidth: 25
    },
  },
  nav: {
    paddingTop: 20
  },
}));

export default useStyles;
