import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Splash from "../../pages/Splash/index"
import History from "../../pages/History/index"
import ReleasedApps from "../../pages/ReleasedApps/index"
import InDev from "../../pages/InDev/index"
import ContactPage from "../../pages/Contact/index"
import SwitchFramework from "../../pages/SwitchFramework/index"

function NavTabs(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

NavTabs.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="About" {...a11yProps(0)} />
                    <Tab label="History" {...a11yProps(1)} />
                    <Tab label="Released Apps" {...a11yProps(2)} />
                    <Tab label="In Development" {...a11yProps(3)} />
                    <Tab label="Contact" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <NavTabs value={value} index={0}>
                <Splash />
            </NavTabs>
            <NavTabs value={value} index={1}>
                <History />
            </NavTabs>
            <NavTabs value={value} index={2}>
                <ReleasedApps />
            </NavTabs>
            <NavTabs value={value} index={3}>
                <InDev />
            </NavTabs>
            <NavTabs value={value} index={4}>
                <ContactPage />
            </NavTabs>
        </div>
    );
}