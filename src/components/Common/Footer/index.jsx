import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { email, tel, socialMedia } from '../../../constants';

import useStyles from './styles';

import logo from '../../../assets/images/logo.png';

const Footer = () => {
	const classes = useStyles();

	// const socialMediaIcons = [
	// 	{
	// 		icon: <PhoneEnabledIcon />,
	// 		path: 'tel:+4407949782401',
	// 		props: {
	// 			'aria-label': 'email',
	// 		},
	// 	},
	// 	{
	// 		icon: <MailOutlineIcon />,
	// 		path: 'mailto:efrain.villanueva3@gmail.com',
	// 		props: {
	// 			'aria-label': 'mobile phone',
	// 		},
	// 	},
	// 	{
	// 		icon: <GitHubIcon />,
	// 		path: 'https://github.com/efrain2010',
	// 		props: {
	// 			target: '_blank',
	// 			rel: 'noreferrer',
	// 			'aria-label': 'Github',
	// 		},
	// 	},
	// 	{
	// 		icon: <LinkedInIcon />,
	// 		path: 'https://www.linkedin.com/in/efrain-villanueva/',
	// 		props: {
	// 			target: '_blank',
	// 			rel: 'noreferrer',
	// 			'aria-label': 'LinkedIn',
	// 		},
	// 	},
	// 	{
	// 		icon: <InstagramIcon />,
	// 		path: 'https://www.instagram.com/efraintenso/',
	// 		props: {
	// 			target: '_blank',
	// 			rel: 'noreferrer',
	// 			'aria-label': 'Instagram',
	// 		},
	// 	},
	// ];

	return (
		<footer className={classes.root}>
			<Container maxWidth={false}>
				<Grid container justify='center'>
					<Grid item xs>
						<img className={classes.logo} src={logo} alt='Logo' />
						<Typography variant='h2'>
							Created with <span className='text-red-v'>❤</span> by Efrain
							Villanueva
						</Typography>
						<Typography variant='body1'>
							<a
								href='https://brittanychiang.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Design inspired in Brittany Chiang profile
							</a>
						</Typography>
						{[email, tel, ...socialMedia].map((media, index) => {
							const MediaIcon = media.icon;
							console.log(MediaIcon);
							return (
								<IconButton
									key={`footer-media-${index}`}
									href={media.link}
									alt={media.name}
								>
									{React.createElement(MediaIcon)}
									{/* <MediaIcon /> */}
								</IconButton>
							);
						})}
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
};

export default Footer;
