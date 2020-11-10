import React from 'react';
import { loremIpsum } from 'lorem-ipsum';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';

import Title from '../../Common/Title';

import efraWorkingImg from '../../../assets/images/efra-working.jpg';
import useStyles from './styles';

const AboutSection = () => {
	const classes = useStyles();

	const skillsList = [
		'JavaScript (ES6)',
		'AngularJS',
		'React',
		'Django',
		'Laravel',
		'Java',
	];

	return (
		<section className={classes.aboutMe}>
			<Grid container>
				<Title align='left' gutter={true}>
					About Me
				</Title>
			</Grid>
			<Grid container direction='row' alignItems='flex-start' justify='center'>
				<Grid item xs={6}>
					<Typography variant='body1' variantMapping={{ body1: 'p' }}>
						I'm a <strong>Fullstack Web Developer</strong> based in Scotland
						with 6 years of professional experience. I'm interested in different
						kind of projects like mobile, desktop and game development, but
						mainly in web development.
						<br />
						<br />
						{loremIpsum({ count: 5 })}
					</Typography>

					<br />

					<Typography variant='subtitle1' variantMapping={{ subtitle1: 'p' }}>
						Technologies I've used:
					</Typography>
					<Grid
						className='skills'
						container
						direction='row'
						alignItems='center'
						justify='center'
					>
						{skillsList.map((skill, index) => {
							return (
								<Grid key={'home-skill-' + index} item xs={6}>
									<Typography
										variant='subtitle1'
										variantMapping={{ subtitle1: 'p' }}
									>
										<CodeIcon /> {skill}
									</Typography>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<figure className='photo'>
						<div className='innerFrame'>
							<img src={efraWorkingImg} alt='Efra morning work' />
						</div>
					</figure>
				</Grid>
			</Grid>
		</section>
	);
};

export default AboutSection;
