import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: { 
    '& .entry': {
      height: 180,
      padding: theme.spacing.unit
    }
  },
}));

export default useStyles;
