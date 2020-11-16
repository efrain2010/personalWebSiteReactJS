import React from 'react';
import { Element } from 'react-scroll';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Title from '../../Common/Title';

import useStyles from './styles';

import codeImg from '../../../assets/images/code-background.jpg';

const ProjectsSection = () => {
	const classes = useStyles();

	const projectsList = [
		{
			title: 'Nahil Alianza Inmobiliaria',
			type: 'Website and CMS',
			image: codeImg,
			link: 'https://github.com/facebook/create-react-app/issues/',
			description:
				'A nice CMS System to allow the company manage their properties and receive messages from prospects.',
			skills: ['Laravel 4.5', 'AngularJS', 'JQuery', 'Bower', 'SASS'],
		},
		{
			title: 'Nahil Alianza Inmobiliaria',
			type: 'Website and CMS',
			image: codeImg,
			link: 'https://github.com/facebook/create-react-app/issues/',
			description:
				'A nice CMS System to allow the company manage their properties and receive messages from prospects.',
			skills: ['Laravel 4.5', 'AngularJS', 'JQuery', 'Bower', 'SASS'],
		},
		{
			title: 'Nahil Alianza Inmobiliaria',
			type: 'Website and CMS',
			image: codeImg,
			link: 'https://github.com/facebook/create-react-app/issues/',
			description:
				'A nice CMS System to allow the company manage their properties and receive messages from prospects.',
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
							<Grid item xs={6}>
								<Typography variant='h5' variantMapping={{ h5: 'h2' }}>
									{project.title}
								</Typography>
								<Typography variant='body2'>{project.description}</Typography>
								<ul>
									{project.skills.map((skill, index) => (
										<li key={`project-skill-${index}`}>{skill}</li>
									))}
								</ul>
							</Grid>
							<Grid item xs={6}>
								<figure>
									<img src={project.image} alt='project screenshot' />
								</figure>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Element>
	);
};

export default ProjectsSection;
