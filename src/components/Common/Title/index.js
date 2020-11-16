import React from 'react';
import PropTypes from 'prop-types';

import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

const Title = (props) => {
	const tempClasses = useStyles();

	const classes = [tempClasses.root];

	let align = null;
	if (props.align === 'left') {
		classes.push(tempClasses.left);
		align = 'flex-start';
	} else if (props.align === 'center') {
		classes.push(tempClasses.center);
		align = 'center';
	} else if (props.align === 'right') {
		classes.push(tempClasses.right);
		align = 'flex-end';
	}

	if (isWidthDown('xs', props.width)) {
		align = 'center';
	}

	return (
		<Grid className={classes.join(' ')} container justify={align}>
			<Typography variant='h2'>
				{props.children}
				<span className='underline'></span>
			</Typography>
		</Grid>
	);
};

Title.propTypes = {
	align: PropTypes.string,
};

Title.defaultProps = {
	align: 'right',
};

export default withWidth()(Title);
