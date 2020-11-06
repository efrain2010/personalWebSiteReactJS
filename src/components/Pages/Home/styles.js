import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: '#303030',
    backgroundPosition: 'center 60%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    '& > div': {
      height: '100vh',
      position: 'relative',
    },
    '& strong': {
      color: theme.palette.secondary.main
    }
  },
  fitToScreen: {
    minHeight: '100vh',
  },
  letsTalkBtn: {
    borderWidth: 3,
  },
  aboutMe: {
    padding: theme.spacing(3)
  }
}));

export default useStyles;
