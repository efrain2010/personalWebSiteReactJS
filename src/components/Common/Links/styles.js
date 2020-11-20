import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& ul': {
			margin: 0,
			padding: 0,
		},
		'& li': {
			display: 'inline',
			padding: theme.spacing(),
		},
		'& a': {
			cursor: 'pointer',
			fontSize: 14,
			fontWeight: 'bold',
		},
		'& a:hover': {
			color: theme.palette.secondary.main,
		},
		[theme.breakpoints.down('xs')]: {
			backgroundColor: 'rgba(38, 38, 38, 0.9)',
			bottom: 0,
			display: 'none',
			left: 0,
			position: 'fixed',
			right: 0,
			textAlign: 'center',
			top: 0,
			width: '100%',
			zIndex: 999,
			'& li': {
				display: 'block',
			},
			'& a': {
				fontSize: '2rem',
				fontWeight: 400,
			},
			'& button': {
				position: 'fixed',
				right: 0,
				top: 0,
			},
			'&.open': {
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
			},
		},
	},
	button: {
		marginRight: '10px !important',
	},
}));

export default useStyles;
