import React from 'react';
import Grid from '@material-ui/core/Grid';

import Title from '../../Common/Title';

import useStyles from './styles';

const ContactSection = (props) => {
	const classes = useStyles();

	return (
		<section ref={props.refProp} className={classes.aboutMe}>
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
		</section>
	);
};

export default ContactSection;
