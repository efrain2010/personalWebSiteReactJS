import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import { email, socialMedia } from '../../../constants/socials';

import useStyles from './styles';

const SocialMedia = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ul className='fixed-media media'>
				{[...socialMedia].map((media, index) => {
					return (
						<li key={`media-${index}`}>
							<IconButton {...media.props}>
								<a href={media.link} {...media.props}>
									{media.icon}
								</a>
							</IconButton>
						</li>
					);
				})}
			</ul>
			<aside className='fixed-media email'>
				<a href={`mailto:${email}`}>{email}</a>
			</aside>
		</div>
	);
};

export default SocialMedia;
