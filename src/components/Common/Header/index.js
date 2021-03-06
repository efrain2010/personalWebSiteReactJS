import React, { useState, useEffect, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Links from '../Links';

import useStyles from './styles';
import logo from '../../../assets/images/logo.png';

function HideOnScroll(props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
};

const Header = (props) => {
	const classes = useStyles();
	const [headerClasses, setHeaderClasses] = useState([classes.root]);
	const [headerRef] = useState(createRef());
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		const logit = () => {
			const tempClasses = [...headerClasses];
			const headerRect = headerRef.current.getBoundingClientRect();

			if (window.pageYOffset >= headerRect.height) {
				if (!tempClasses.includes(classes.scrolled))
					tempClasses.push(classes.scrolled);
			} else {
				const classIndex = tempClasses.indexOf(classes.scrolled);
				if (classIndex !== -1) tempClasses.splice(classIndex, 1);
			}
			setHeaderClasses(tempClasses);
		};

		const watchScroll = () => {
			window.addEventListener('scroll', logit);
		};
		watchScroll();
		// Remove listener (like componentWillUnmount)
		return () => {
			window.removeEventListener('scroll', logit);
		};
	}, [classes, headerClasses, headerRef]);

	const onClickHandler = (action) => {
		if (isWidthDown('xs', props.width)) {
			setOpenMenu(action);
		}
	};

	return (
		<HideOnScroll {...props}>
			<header className={headerClasses.join(' ')} ref={headerRef}>
				<Container maxWidth={false}>
					<Grid container alignItems='center' spacing={3}>
						<Grid item xs={2}>
							<NavLink className={classes.logo} exact to='/'>
								<img src={logo} alt='Logo' />
							</NavLink>
						</Grid>
						<Grid item xs={10}>
							<Grid container justify='flex-end' spacing={3}>
								<IconButton
									className={classes.menuBtn}
									aria-label='Menu Open Button'
									onClick={() => onClickHandler(true)}
								>
									<MenuIcon />
								</IconButton>
								<Links behaviourHandler={onClickHandler} opened={openMenu} />
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</header>
		</HideOnScroll>
	);
};

export default withWidth()(Header);
