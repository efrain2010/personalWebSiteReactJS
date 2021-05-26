import React, { useState } from 'react';
import { Element } from 'react-scroll';

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

const WorkedSection = () => {
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
        'Designed, sold and created websites for clients in different business areas. Consultor in web development and online tutor for web development.',
        "To build websites, CMS and web apps, I've worked with technologies like WordPress, Laravel, JavaScript, Python, Webpack and AngularJS.",
        'Worked with teams of engineers in the US, and given remote support to clients.',
      ],
    },
    {
      logo: ggammaLogoImg,
      company: 'Grupo Gamma Peninsular',
      companyLink: 'http://ggamma.com/',
      title: 'Administration Manager',
      dates: 'Apr 2013 - Apr 2018',
      tasks: [
        'Started as a web developer apprentice and escalated to company management assistant.',
        'As a small company, I had to switch between different roles as needed, giving me the experience in various areas like sales, project estimation, project management, web development and business management.',
        'As a web developer, I built several web pages and web apps using Laravel, JQuery, AngularJS and JavaScript.',
        'Among my achievements, I was able to concrete strategic alliances to build SaaS projects, help to obtain the Moprosoft level 2 certification, and help in winning two government funds for software innovation.',
      ],
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sectionName = 'homeWorkedSection';

  return (
    <Element
      id={sectionName}
      name={sectionName}
      className={classes.workSection}
    >
      <Grid container>
        <Title align="right" gutter={true}>
          Work Experience
        </Title>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item sm={10} xs={12}>
          <TabContext value={value} className="jobsHeaderContainer">
            <AppBar
              className="jobsHeader"
              position="static"
              color="default"
            >
              <Tabs
                className="jobsTabs"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="Job section tabs"
              >
                {jobs.map((job, index) => {
                  const alt = `${job.company} Logo`;
                  return (
                    <Tab
                      className="logoBtn"
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
                  className="jobs-container"
                >
                  <Typography
                    variant="h6"
                    variantMapping={{ h6: 'h3' }}
                  >
                    {job.title}{' '}
                    <a
                      href={job.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ {job.company}
                    </a>
                    <br />
                  </Typography>
                  <Typography variant="body1" paragraph={true}>
                    {job.dates}
                  </Typography>
                  <Grid className="tasks" container>
                    {job.tasks.map((task, index) => {
                      return (
                        <Grid
                          key={'home-job-tasks-' + index}
                          item
                          xs={12}
                        >
                          <Typography
                            variant="subtitle1"
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
    </Element>
  );
};

export default WorkedSection;
