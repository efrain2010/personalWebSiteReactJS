import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import { email, socialMedia } from '../../../constants';

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
								{/* eslint-disable-next-line react/jsx-no-target-blank */}
								<a href={media.link} target='_blank' {...media.props}>
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
