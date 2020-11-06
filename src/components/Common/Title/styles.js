import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: { 
    marginBottom: 40,
    '& > *': {
      fontSize: '2.5rem',
      position: 'relative',
    },
    '& .underline': {
      backgroundColor: '#FFFFFF',
      bottom: 0,
      display: 'inline-block',
      height: 1,
      left: -0,
      position: 'absolute',
      width: '100%',
    }
  },
  left: {
    '& > *': {
      paddingRight: 25,
      textAlign: 'left',
    }
  },
  right: {
    '& > *': {
      paddingLeft: 25,
      textAlign: 'right',
    }
  },
  center: {
    '& > *': {
      textAlign: 'center',
      paddingLeft: 25,
      paddingRight: 25,
    }
  }
}));

export default useStyles;
