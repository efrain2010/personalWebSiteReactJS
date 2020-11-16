import React from 'react';
import { Link } from 'react-scroll';

import useStyles from './styles';

const Links = () => {
	const classes = useStyles();

	const linksData = [
		{
			props: {
				containerId: 'homeAboutSection',
			},
			title: 'About',
		},
		{
			props: {
				containerId: 'homeWorkedSection',
			},
			title: 'Experience',
		},
		{
			props: {
				containerId: 'homeProjectsSection',
			},
			title: 'Projects',
		},
		{
			props: {
				containerId: 'homeContactSection',
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
							<Link
								activeClass='active'
								to={link.props.containerId}
								spy={true}
								smooth={true}
								duration={500}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default Links;
