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
      <Box p={3}>
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
        <AppBar position="static" color="default">
          <Tabs
            value={ value }
            onChange={ handleChange }
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab {...a11yProps(0)}>
              Item One
            </Tab>
            <Tab label="Item Two" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x' }
          index={ value }
          onChangeIndex={ handleChangeIndex }
        >
          <TabPanel value={ value } index={ 0 } dir={ theme.direction }>
            Item One
          </TabPanel>
          <TabPanel value={ value } index={ 1 } dir={ theme.direction }>
            Item Two
          </TabPanel>
        </SwipeableViews>
      </div>
    </Grid>
  </section>;
};

export default WorkedSection;
