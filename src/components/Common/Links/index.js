import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Links = (props) => {
	const classes = useStyles();

	const linksData = [
		{
			props: {
				onClick: props.sectionsRef.heroRef.refHandler,
			},
			title: 'Home',
		},
		{
			props: {
				onClick: props.sectionsRef.aboutRef.refHandler,
			},
			title: 'About',
		},
		{
			props: {
				onClick: props.sectionsRef.workRef.refHandler,
			},
			title: 'Experience',
		},
		{
			props: {
				onClick: props.sectionsRef.projectsRef.refHandler,
			},
			title: 'Projects',
		},
		{
			props: {
				onClick: props.sectionsRef.contactRef.refHandler,
			},
			title: 'Contact',
		},
	];

	return (
		<React.Fragment>
			<nav className={classes.root}>
				<ul>
					{linksData.map((link, index) => (
						<li key={`header-links-${index}`}>
							<a {...link.props}>{link.title}</a>
						</li>
					))}
				</ul>
			</nav>
		</React.Fragment>
	);
};

Links.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Links;
