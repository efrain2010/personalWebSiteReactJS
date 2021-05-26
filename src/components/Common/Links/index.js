import React from 'react';
import { Link as Anchor } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const Links = ({ behaviourHandler, opened, width }) => {
  const classes = useStyles();

  const menuBehaviour = opened ? 'open' : '';

  const linksData = [
    {
      props: {
        link: '/blog',
      },
      title: 'Blog',
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
    <>
      <nav className={[classes.root, menuBehaviour].join(' ')}>
        <ul>
          {isWidthDown('xs', width) ? (
            <li>
              <IconButton
                aria-label="Menu Close Button"
                onClick={() => behaviourHandler(false)}
              >
                <CloseIcon />
              </IconButton>
            </li>
          ) : null}
          {linksData.map((link, index) => (
            <li key={`header-links-${index}`}>
              {AppLink(link, behaviourHandler)}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

const AppLink = (link, behaviourHandler) => {
  const { pathname } = useLocation();

  return pathname !== '/' ? (
    link.props.containerId ? (
      <Link
        to={{
          pathname: '/',
          hash: link.props.containerId,
        }}
      >
        {link.title}
      </Link>
    ) : (
      <Link to={link.props.link}>{link.title}</Link>
    )
  ) : !link.props.containerId ? (
    <Link to={link.props.link}>{link.title}</Link>
  ) : (
    <Anchor
      activeClass="active"
      duration={500}
      onClick={() => behaviourHandler(false)}
      smooth={true}
      spy={true}
      to={link.props.containerId}
    >
      {link.title}
    </Anchor>
  );
};

export default withWidth()(Links);
