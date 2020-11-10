import React from 'react';
import Grid from '@material-ui/core/Grid';

import Title from '../../Common/Title';

import useStyles from './styles';

import codeImg from '../../../assets/images/code-background.jpg';

const ProjectsSection = () => {
	const classes = useStyles();

	return (
		<section className={classes.projects}>
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
				spacing={2}
			>
				{[...Array(3)].map((el, index) => (
					<Grid key={`projects-list-${index}`} item xs={12}>
						<Grid
							container
							justify={index % 2 === 0 ? 'flex-start' : 'flex-end'}
						>
							<Grid item xs={5}>
								<div className='containerCicle'>
									<div className='containerSquare'>
										<div className='content'>
											<img src={codeImg} alt='project screenshot' />
											<figcaption>
												Real Estate
												<br />
												Website & CMS
											</figcaption>
										</div>
									</div>
								</div>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default ProjectsSection;
