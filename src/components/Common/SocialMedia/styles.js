import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .fixed-media': {
			bottom: theme.spacing(1),
			listStyle: 'none',
			margin: 0,
			padding: 0,
			position: 'fixed',
		},
		'& .media': {
			left: theme.spacing(3),
			'& button': {
				padding: theme.spacing(1),
			},
			'& a': {
				lineHeight: 0,
			},
			'& a, svg': {
				fontSize: 20,
			},
		},
		'& .email': {
			bottom: theme.spacing(2),
			display: 'block',
			height: 245,
			right: theme.spacing(3),
			width: 25,
			'& a': {
				fontSize: 18,
				writingMode: 'vertical-rl',
			},
			'& .MuiTouchRipple-root > *': {
				backgroundColor: theme.palette.secondary.main,
			},
		},
	},
}));

export default useStyles;
