import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const email = 'efrain.villanueva3@gmail.com';

const anchorProps = {
	target: '_blank',
	rel: 'noopener noreferrer',
};

const socialMedia = [
	{
		name: 'GitHub',
		link: 'https://github.com/efrain2010',
		icon: <GitHubIcon />,
		props: anchorProps,
	},
	{
		name: 'LinkedIn',
		link: 'https://linkedin.com/in/efrain-villanueva/',
		icon: <LinkedInIcon />,
		props: anchorProps,
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/efraintenso/',
		icon: <InstagramIcon />,
		props: anchorProps,
	},
];

export { email, socialMedia };
