import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    '& a': {
      color: "#ffffff",
      textDecoration: "none"
    }
  }
}));

export default useStyles;
