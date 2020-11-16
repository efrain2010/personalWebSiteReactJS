import React from 'react';
import { Element } from 'react-scroll';

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
		'Typescript',
		'Django',
		'Laravel',
		'Webpack',
		'MaterialUI',
	];

	return (
		<Element name='homeAboutSection' className={classes.aboutMe}>
			<Grid container>
				<Title align='left' gutter={true}>
					About Me
				</Title>
			</Grid>
			<Grid
				alignItems='flex-start'
				className='content'
				container
				direction='row'
				justify='center'
				spacing={2}
			>
				<Grid item sm={6} xs={12}>
					<Typography variant='body1' variantMapping={{ body1: 'p' }}>
						I'm a <strong>Fullstack Web Developer</strong> based in Scotland
						with six years of professional experience. I'm interested in
						different kinds of projects like mobile, desktop and game
						development, but mainly web development.
						<br />
						<br />
						Shortly after graduating from my bachelor's degree at the{' '}
						<strong>
							<a
								href='https://www.contaduria.uady.mx'
								target='_blank'
								rel='noopener noreferrer'
							>
								Autonomous University of Yucatan
							</a>
						</strong>{' '}
						I began working at{' '}
						<strong>
							<a
								href='https://ggamma.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Ggamma
							</a>
						</strong>{' '}
						where I spent five years. Later on, I worked as a freelance web
						developer for over a year. In 2019 I moved to Glasgow to study a
						master's degree in Software Development at the{' '}
						<strong>
							<a
								href='https://www.gla.ac.uk'
								target='_blank'
								rel='noopener noreferrer'
							>
								University of Glasgow
							</a>
						</strong>{' '}
						. I am now looking for an opportunity to work in a great company
						that helps me to skyrocket my career.
					</Typography>

					<br />

					<Typography variant='subtitle1' variantMapping={{ subtitle1: 'p' }}>
						These are some of the technologies I've used:
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
				<Grid item sm={6} xs={12}>
					<figure className='photo'>
						<div className='innerFrame'>
							<img src={efraWorkingImg} alt='Efra morning work' />
						</div>
					</figure>
				</Grid>
			</Grid>
		</Element>
	);
};

export default AboutSection;
