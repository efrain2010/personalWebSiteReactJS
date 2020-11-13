import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#303030',
		paddingBottom: theme.spacing(1),
		paddingTop: theme.spacing(1),
		position: 'fixed',
		width: '100%',
		zIndex: 9,
	},
	scrolled: {
		boxShadow:
			'-11px 0px 11px -2px rgb(0 0 0 / 0.6), 7px 0 11px -2px rgb(0 0 0 / 0.6)',
	},
	logo: {
		'& h2': {
			fontSize: 18,
			display: 'inline-block',
			marginLeft: theme.spacing(),
		},
		'& img': {
			maxWidth: 25,
		},
	},
	nav: {
		paddingTop: 20,
	},
}));

export default useStyles;
