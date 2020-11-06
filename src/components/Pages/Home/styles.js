import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > section:not(.heroSection)': {
      paddingTop: theme.spacing(3),
    }
  },
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
      color: theme.palette.secondary.main,
    }
  },
  letsTalkBtn: {
    animation: `$btnGlow 3000ms ${theme.transitions.easing.easeInOut}`,
    animationIterationCount: 'infinite',
    borderWidth: 3,
    '&:hover': {
      borderWidth: 3,
    }
  },
  "@keyframes btnGlow": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.4,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export default useStyles;
