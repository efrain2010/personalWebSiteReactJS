import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';

import Title from '../../Common/Title';

import logoImg from '../../../assets/images/logo.png';
import ggammaLogoImg from '../../../assets/images/ggamma-logo.png';
import useStyles from './styles';

const a11yProps = (index) => {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
};

const WorkedSection = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState('0');
	const [jobs] = useState([
		{
			logo: logoImg,
			company: 'Freelancer',
			companyLink: null,
			title: 'Web Developer',
			dates: 'Apr 2018 - Sep 2019',
			tasks: [
				'Design and implementation of WordPress blogs, as well as webpages dedicated to real estate and tourism.',
				'Creation of a webpage for a digital marketing agency using Laravel 5.',
				'Information system created in Laravel 4 for a Real Estate company.',
				'Maintenance and development of functions for an API in PHP for an education-based project aimed at students in the USA.',
				'Consultant for a digital platform used to improve the business process of a real estate company.',
				'Consultant and mentor in SEO and creation of webpages in WordPress for a digital marketing agency.',
				'Virtual classes and in-person mentoring for basic programming and webpage creation.',
			],
		},
		{
			logo: ggammaLogoImg,
			company: 'Grupo Gamma Peninsular',
			companyLink: 'http://ggamma.com/',
			title: 'Administration Manager',
			dates: 'Apr 2013 - Apr 2018',
			tasks: [
				'From being a programming apprentice, I quickly learned and escalated in the company successfully developing web pages and information systems using technologies like PHP, Laravel, C#, Javascript and AngularJS; working in teams and independently.',
				'Responsible for creating scopes, timetables, projects, as well as selling these. I was successful in closing approximately nine projects, one of which was with a Canadian company. By standardizing the project documentation, I helped lower the prospection time and achieved a higher selling rate. Thanks to this experience, I helped the company win two project funds in a Mexican innovation stimulus program.',
				'I had the role of project manager for four projects, three related to software, and one to graphic design.',
				'As a business management assistant, I concreted two strategic alliances with other companies to build SaaS projects. I was also responsible for the company when the owner was on leave.',
				'I had a key role in the company’s MoProSoft certification as a Resource Manager. Administrating the assets and employees as the norm dictates and presenting the evidence to the evaluator.',
			],
		},
	]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<section ref={props.refProp} className={classes.workSection}>
			<Grid container>
				<Title align='right' gutter={true}>
					Work Experience
				</Title>
			</Grid>
			<Grid container direction='row' alignItems='center' justify='center'>
				<Grid item xs={10}>
					<TabContext value={value} className='jobsHeaderContainer'>
						<AppBar className='jobsHeader' position='static' color='default'>
							<Tabs
								className='jobsTabs'
								value={value}
								onChange={handleChange}
								indicatorColor='primary'
								textColor='primary'
								variant='fullWidth'
								aria-label='Job section tabs'
							>
								{jobs.map((job, index) => {
									const alt = `${job.company} Logo`;
									return (
										<Tab
											className='logoBtn'
											value={`${index}`}
											key={'jobs-tabs-' + index}
											label={<img src={job.logo} alt={alt} />}
											{...a11yProps(index)}
										/>
									);
								})}
							</Tabs>
						</AppBar>
						{jobs.map((job, index) => {
							return (
								<TabPanel
									value={`${index}`}
									key={'jobs-panel-' + index}
									className='jobs-container'
								>
									<Typography variant='h6' variantMapping={{ h6: 'h3' }}>
										{job.title}{' '}
										<a
											href={job.companyLink}
											target='_blank'
											rel='noopener noreferrer'
										>
											@ {job.company}
										</a>
										<br />
									</Typography>
									<Typography variant='body1' paragraph={true}>
										{job.dates}
									</Typography>
									<Grid className='tasks' container>
										{job.tasks.map((task, index) => {
											return (
												<Grid key={'home-job-tasks-' + index} item xs={12}>
													<Typography
														variant='subtitle1'
														variantMapping={{ subtitle1: 'p' }}
													>
														<CodeIcon /> {task}
													</Typography>
												</Grid>
											);
										})}
									</Grid>
								</TabPanel>
							);
						})}
					</TabContext>
				</Grid>
			</Grid>
		</section>
	);
};

export default WorkedSection;
