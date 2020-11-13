import React from 'react';
import { Element } from 'react-scroll';

import Grid from '@material-ui/core/Grid';

import Title from '../../Common/Title';

import useStyles from './styles';

const ContactSection = (props) => {
	const classes = useStyles();

	return (
		<Element name='homeContactSection' className={classes.aboutMe}>
			<Grid container>
				<Title align='center' gutter={true}>
					Let's Build Something Awesome
				</Title>
			</Grid>
			<Grid
				container
				direction='row'
				alignItems='center'
				justify='center'
			></Grid>
		</Element>
	);
};

export default ContactSection;
