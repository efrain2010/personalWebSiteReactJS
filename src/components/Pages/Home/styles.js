import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > div:nth-child(1n+2)': {
			paddingTop: theme.spacing(3),
		},
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
		},
		[theme.breakpoints.down('xs')]: {
			'& > div': {
				height: 'auto',
				padding: '15% 0',
			},
			'& h1': {
				fontSize: '3rem',
			},
			'& h2': {
				fontSize: '2.2rem',
			},
			'& p:last-of-type': {
				fontSize: '1.2rem',
			},
		},
	},
	aboutMe: {
		'& .photo': {
			borderRadius: '50%',
			height: 280,
			overflow: 'hidden',
			margin: '0 auto',
			position: 'relative',
			width: 280,
			'&::before': {
				border: '1px solid #FFFFFF',
				borderRadius: '50%',
				content: '""',
				height: '100%',
				display: 'block',
				left: 0,
				opacity: 1,
				position: 'absolute',
				transform: 'scale(0.95)',
				top: 0,
				transition: `all 300ms ${theme.transitions.easing.easeInOut}`,
				width: '100%',
			},
			'&::after': {
				border: `1px solid ${theme.palette.secondary.main}`,
				borderRadius: '50%',
				boxShadow: `0px 0px 12px 0px ${theme.palette.secondary.main}`,
				content: '""',
				height: '100%',
				left: 0,
				display: 'block',
				opacity: 0,
				position: 'absolute',
				top: 0,
				transform: 'scale(0.9)',
				transition: `all 300ms ${theme.transitions.easing.easeInOut}`,
				width: '100%',
			},
			'& .innerFrame': {
				borderRadius: '50%',
				height: '100%',
				transform: 'scale(0.85)',
				objectFit: 'cover',
				overflow: 'hidden',
				width: '100%',
				'&::after': {
					backgroundColor: `${theme.palette.secondary.main}`,
					borderRadius: '50%',
					bottom: 0,
					content: '""',
					display: 'block',
					height: '100%',
					left: 0,
					opacity: '0.5',
					position: 'absolute',
					transition: `all 150ms ${theme.transitions.easing.sharp}`,
					width: '100%',
				},
			},
			'& img': {
				borderRadius: '50%',
				height: '100%',
				transition: `all 150ms ${theme.transitions.easing.sharp}`,
				transform: 'scale(1)',
			},
			'&:hover': {
				'&::before': {
					opacity: 0,
					transform: 'scale(0.95)',
				},
				'&::after': {
					opacity: 1,
					transform: 'scale(0.96)',
				},
				'& .innerFrame::after': {
					opacity: '0',
				},
				'& img': {
					transform: 'scale(1.5)',
				},
			},
		},
		'& .skills': {
			'& svg': {
				display: 'inline-block',
				marginRight: 5,
				verticalAlign: 'middle',
			},
			'& p:hover svg': {
				color: theme.palette.secondary.main,
			},
		},
		[theme.breakpoints.down('xs')]: {
			'& .photo': {
				height: 280,
				marginBottom: theme.spacing(2),
				width: 280,
			},
			'& .content': {
				'& > div:nth-child(1)': {
					order: 2,
				},
				'& > div:nth-child(2)': {
					order: 1,
				},
			},
		},
	},
	workSection: {
		'& .jobsHeader': {
			backgroundColor: '#303030',
			boxShadow: 'none',
		},
		'& .logoBtn:nth-child(1) img': {
			width: 30,
		},
		'& .logoBtn:nth-child(2) img': {
			width: 90,
		},
		'& .jobs-container': {
			paddingTop: 20,
			paddingBottom: 20,
			'& a': {
				color: theme.palette.secondary.main,
				transition: `all 300ms ${theme.transitions.easing.easeIn}`,
			},
			'& .tasks svg': {
				display: 'inline-block',
				verticalAlign: 'middle',
				marginRight: 5,
				transition: `all 150ms ${theme.transitions.easing.easeIn}`,
			},
			'& .tasks p:hover svg': {
				color: theme.palette.secondary.main,
				transform: 'scale(1.2)',
			},
		},
		[theme.breakpoints.down('xs')]: {
			'& .jobs-container': {
				padding: 0,
				paddingTop: theme.spacing(2),
			},
		},
	},
	projects: {
		'& .content': {
			paddingBottom: theme.spacing(3),
			'& h2': {
				marginTop: -7,
			},
			'& figure': {
				margin: 0,
				position: 'relative',
				'&::before': {
					content: '""',
					height: '100%',
					left: 0,
					position: 'absolute',
					top: 0,
					width: '100%',
					zIndex: 2,
				},
			},
			'& ul': {
				padding: 0,
				'& li': {
					listStyle: 'none',
					display: 'inline-block',
					marginRight: theme.spacing(2),
					'&:last-child': {
						marginRight: 0,
					},
				},
			},
		},
		[theme.breakpoints.down('xs')]: {
			'& .inner-content': {
				paddingBottom: theme.spacing(2),
				'& > div': {
					paddingTop: 0,
				},
			},
		},
	},
	contact: {
		padding: '20% 0 !important',
		'& a': {
			marginTop: theme.spacing(3),
		},
	},
	'@keyframes neonSign': {
		'0%': {
			opacity: 1,
		},
		'50%': {
			opacity: 0.85,
		},
		'100%': {
			opacity: 1,
		},
	},
}));

export default useStyles;
