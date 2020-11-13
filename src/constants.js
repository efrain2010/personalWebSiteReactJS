import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const email = {
	name: 'email',
	link: 'efrain.villanueva3@gmail.com',
	icon: <MailOutlineIcon />,
};

const tel = {
	name: 'mobile',
	link: '+4407949782401',
	icon: <PhoneEnabledIcon />,
};

const socialMedia = [
	{
		name: 'GitHub',
		link: 'https://github.com/efrain.villanueva3',
		icon: <GitHubIcon />,
	},
	{
		name: 'LinkedIn',
		link: 'https://github.com/efrain2010',
		icon: <LinkedInIcon />,
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/efraintenso/',
		icon: <InstagramIcon />,
	},
];

export { email, tel, socialMedia };
