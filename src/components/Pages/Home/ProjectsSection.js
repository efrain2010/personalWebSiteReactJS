import React from 'react';
import { Element } from 'react-scroll';

import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Title from '../../Common/Title';

import useStyles from './styles';

import nahilScreenshot from '../../../assets/images/nahil-screenshot.png';
import numaxScreenshot from '../../../assets/images/numax-screenshot.png';
import stunitedScreenshot from '../../../assets/images/stunited-screenshot.png';

const ProjectsSection = (props) => {
	const classes = useStyles();

	const projectsList = [
		{
			title: 'Nahil Alianza Inmobiliaria',
			type: 'Website and CMS',
			image: nahilScreenshot,
			link: 'https://nahilrentasyventas.com',
			description:
				'A CMS System to allow a real estate company to manage their properties and receive messages from prospects.',
			skills: ['Laravel 4.5', 'AngularJS', 'JQuery', 'Bower', 'SASS'],
		},
		{
			title: 'Stunited',
			type: 'API design & management',
			image: numaxScreenshot,
			link: 'https://www.stunitedapp.com',
			description:
				'Manage and improvement to a PHP API. Working remotely with a team of engineers in the US, several functions were created to be consumed by mobile apps.',
			skills: ['Laravel 5', 'PHP', 'API Design'],
		},
		{
			title: 'Numax',
			type: 'Webapp development',
			image: stunitedScreenshot,
			link: 'https://numax.mx',
			description:
				'I sold, designed, managed and participated as the lead developer for this project when I was working in Ggamma. Webapp to compute the taxes needed to pay when selling or buying properties.',
			skills: ['Laravel 4.5', 'AngularJS', 'JQuery', 'Bower', 'SASS'],
		},
	];

	return (
		<Element name='homeProjectsSection' className={classes.projects}>
			<Grid container>
				<Title align='left' gutter={true}>
					Some Of My Projects
				</Title>
			</Grid>
			<Grid
				container
				direction='row'
				alignItems='center'
				justify='center'
				spacing={0}
			>
				{projectsList.map((project, index) => (
					<Grid className='content' key={`projects-list-${index}`} item xs={12}>
						<Grid className='inner-content' container spacing={4}>
							{isWidthDown('xs', props.width) && (
								<Grid item xs={12}>
									<Typography variant='h5' variantMapping={{ h5: 'h2' }}>
										<a
											href={project.link}
											target='_blank'
											rel='noopener noreferrer'
										>
											{project.title}
										</a>
									</Typography>
									<Typography
										variant='subtitle1'
										variantMapping={{ subtitle1: 'h3' }}
									>
										<strong>{project.type}</strong>
									</Typography>
								</Grid>
							)}
							<Grid item sm={6} xs={12}>
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<figure>
										<img src={project.image} alt='project screenshot' />
									</figure>
								</a>
							</Grid>
							<Grid item sm={6} xs={12}>
								{!isWidthDown('xs', props.width) && (
									<>
										<Typography variant='h5' variantMapping={{ h5: 'h2' }}>
											<a
												href={project.link}
												target='_blank'
												rel='noopener noreferrer'
											>
												{project.title}
											</a>
										</Typography>
										<Typography
											variant='subtitle1'
											variantMapping={{ subtitle1: 'h3' }}
										>
											<strong>{project.type}</strong>
										</Typography>
									</>
								)}
								<Typography variant='body2'>{project.description}</Typography>
								<ul>
									{project.skills.map((skill, index) => (
										<li key={`project-skill-${index}`}>{skill}</li>
									))}
								</ul>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Element>
	);
};

export default withWidth()(ProjectsSection);
