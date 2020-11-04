import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing.unit,
    '& .nav-menu': {
      paddingTop: 8
    },
  },
  image: {
    maxWidth: 30
  },
  nav: {
    paddingTop: 20
  },
}));

export default useStyles;
