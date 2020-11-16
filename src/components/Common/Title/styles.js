import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: 40,
		'& > *': {
			fontSize: '2.5rem',
			position: 'relative',
			transition: `all 150ms ${theme.transitions.easing.easeInOut}`,
		},
		'& .underline': {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: `0px 0px 8px 1px ${theme.palette.secondary.main}`,
			bottom: 0,
			display: 'inline-block',
			height: 1,
			left: -0,
			position: 'absolute',
			width: '100%',
		},
		[theme.breakpoints.down('xs')]: {
			'& > *': {
				fontSize: '1.8rem',
				paddingLeft: '10px !important',
				paddingRight: '10px !important',
				textAlign: 'center',
			},
		},
	},
	left: {
		'& > *': {
			paddingRight: 25,
			textAlign: 'left',
		},
		'&:hover > *': {
			paddingRight: 35,
		},
	},
	right: {
		'& > *': {
			paddingLeft: 25,
			textAlign: 'right',
		},
		'&:hover > *': {
			paddingLeft: 35,
		},
	},
	center: {
		'& > *': {
			textAlign: 'center',
			paddingLeft: 25,
			paddingRight: 25,
		},
		'&:hover > *': {
			paddingRight: 30,
			paddingLeft: 30,
		},
	},
}));

export default useStyles;
