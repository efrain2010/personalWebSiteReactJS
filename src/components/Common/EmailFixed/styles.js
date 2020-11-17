import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		bottom: theme.spacing(2),
		right: theme.spacing(3),
		listStyle: 'none',
		margin: 0,
		padding: 0,
		position: 'fixed',
	},
}));

export default useStyles;
