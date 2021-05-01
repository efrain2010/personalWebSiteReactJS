import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	'@global': {
		a: {
			color: '#FFFFFF',
			textDecoration: 'none',
		},
		img: {
			width: '100%',
		},
		section: {
			position: 'relative',
		},
		'.text-red-v': {
			color: '#EC2B3D',
		},
		'nav a.active': {
			color: '#EC2B3D',
			textDecoration: 'none',
		},
		main: {
			paddingTop: 55,
		},
		'.neon-btn': {
			animation: `$btnGlow 3000ms ${theme.transitions.easing.easeInOut}`,
			animationIterationCount: 'infinite',
			borderWidth: 2,
			overflow: 'hidden',
			padding: '15px 35px',
			textTransform: 'capitalize',
			'& .MuiButton-label': {
				position: 'relative',
				'&::before, &::after': {
					backgroundColor: theme.palette.secondary.main,
					bottom: 0,
					content: '""',
					height: 1,
					left: '-5%',
					position: 'absolute',
					transition: `all 150ms ${theme.transitions.easing.easeInOut}`,
					width: '110%',
				},
				'&::before': {
					left: '-200%',
				},
				'&::after': {
					left: '200%',
				},
			},
			'&:hover, &:focus': {
				borderWidth: 2,
				'& .MuiButton-label': {
					'&::before, &::after': {
						left: '-5%',
					},
				},
			},
		},
		'@keyframes btnGlow': {
			'0%': {
				opacity: 1,
			},
			'50%': {
				opacity: 0.4,
			},
			'100%': {
				opacity: 1,
			},
		},
	},
}));

export default useStyles;
