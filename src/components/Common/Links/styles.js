import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& a.active': {
      color: '#ec2b3d',
      fontWeight: 'bold'
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      display: 'inline',
      padding: theme.spacing.unit
    }
  },
}));

export default useStyles;
