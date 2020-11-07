import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Title from '../../Common/Title';

import logoImg from '../../../assets/images/logo.png';
import ggammaLogoImg from '../../../assets/images/ggamma-logo.png';
import useStyles from './styles';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box pt={ 3 } pb={ 3 }>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = index => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const WorkedSection = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [ value, setValue ] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

	return <section className={ classes.workSection }>
    <Grid container>
      <Title align="right" gutter={ true }>Work Experience</Title>
    </Grid>
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
    >
      <div style={{width: '100%'}}>
        <AppBar className="jobsHeader" position="static" color="default">
          <Tabs
            value={ value }
            onChange={ handleChange }
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label={ <img style={{ width: 30 }} src={ logoImg } alt="VirtualExp Logo" /> } {...a11yProps(0)} />
            <Tab label={ <img style={{ width: 90 }} src={ ggammaLogoImg } alt="VirtualExp Logo" /> } {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x' }
          index={ value }
          onChangeIndex={ handleChangeIndex }
        >
          <TabPanel value={ value } index={ 0 } dir={ theme.direction } p={0}>
            <Typography
              variant='subtitle1'
              variantMapping={{ 'subtitle1': 'h3' }}
            >
              Web Developer | Apr 2018 - Sep 2019
            </Typography>
          </TabPanel>
          <TabPanel value={ value } index={ 1 } dir={ theme.direction }>
            <Typography
              variant='subtitle1'
              variantMapping={{ 'subtitle1': 'h3' }}
            >
              Administration Manager | Apr 2013 - Apr 2018
            </Typography>
          </TabPanel>
        </SwipeableViews>
      </div>
    </Grid>
  </section>;
};

export default WorkedSection;
