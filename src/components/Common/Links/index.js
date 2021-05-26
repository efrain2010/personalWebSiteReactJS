import React from 'react';
import { Link as Anchor } from 'react-scroll';
import {
  Link
} from "react-router-dom";
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const Links = (props) => {
	const classes = useStyles();

	const menuBehaviour = props.opened ? 'open' : '';

	const linksData = [
		{
			props: {
				link: '/blog'
			},
			title: 'Blog'
		},
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
			<nav className={[classes.root, menuBehaviour].join(' ')}>
				<ul>
					{isWidthDown('xs', props.width) ? (
						<li>
							<IconButton
								aria-label='Menu Close Button'
								onClick={() => props.behaviourHandler(false)}
							>
								<CloseIcon />
							</IconButton>
						</li>
					) : null}
					{linksData.map((link, index) => (
						<li key={`header-links-${index}`}>
							{
								link.props.containerId ?
									<Anchor
										activeClass='active'
										duration={500}
										onClick={() => props.behaviourHandler(false)}
										smooth={true}
										spy={true}
										to={link.props.containerId}
									>
										{link.title}
									</Anchor>
									:
									<Link to={link.props.link}>{link.title}</Link>
							}
						</li>
					))}
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default withWidth()(Links);
