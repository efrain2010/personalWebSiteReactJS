import React from 'react';

import useStyles from './styles';

const SocialMedia = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<a href='mailto:efrain.villanueva3@gmail.com'>
				efrain.villanueva3@gmail.com
			</a>
		</div>
	);
};

export default SocialMedia;
