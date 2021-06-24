import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppCard from '../../components/AppCard/index'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        background: "#FFFFF0",
        '&:hover': {
            background: "#ffffd6",
        },
        fontFamily: 'Hammersmith One',
    },
    content: {
        padding: theme.spacing(1),
        width: "100%",
        justifyContent: "center",
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        '& .MuiCardContent-root > p:first-child': { fontFamily: 'Hammersmith One'}
    }
}));

export default function Splash() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <img className={classes.content} src="https://images2.imgbox.com/48/fa/2EsnyXw7_o.png" alt="Douglas Johnson banner" />
                </Grid>
                <Grid item xs={12} className={classes.content}>

                    Douglas Johnson is a newly minted Full Stack Web Developer with a background in the Fine Wine industry.

                </Grid>
                <Grid item md={6}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.paper}
                        >
                            About Me
                        </AccordionSummary>
                        <AccordionDetails className={classes.content}>
                            I am a UW Certified Full Stack Web Developer. I bring an adaptive problem solving mindset to every project I contribute to and am of the "rising tides" mentality when it comes to working with others at every level of my career.
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item md={6}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.paper}
                        >
                            Tech Stack
                        </AccordionSummary>
                        <AccordionDetails className={classes.content}>
                            CORE TECHNOLOGY STACK
                            <br></br>
                            <br></br>
                            HTML,
                            CSS,
                            JavaScript ES6,
                            jQuery,
                            Node.js,
                            Express,
                            Mongo DB,
                            MySQL,
                            React.js
                            <br></br>
                            <br></br>
                            ADDITIONAL TECHNOLOGIES
                            <br></br>
                            <br></br>
                            Jest,
                            Express Handlebars,
                            Mongoose,
                            Sequelzie,
                            Index DB,
                            Webpack,
                            Babel

                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item md={6}>
                    <Paper className={classes.paper}>History</Paper>
                </Grid>
                <Grid item md={6}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.paper}
                        >
                            Released Apps
                        </AccordionSummary>
                        <AccordionDetails className={classes.content}>
                            <AppCard
                                sg='G'
                                title='DunGen'
                                subheader='Dungen Building should be easy.'
                                img='https://images2.imgbox.com/17/7d/4IMeXTWp_o.jpg'
                                imgtitle="DunGen Dragon"
                                summary='BootCamp Project: We created a drag and drop RPG map creator focused on ease of use.'
                                expandhead='Primary Tech Stack'
                                expandpara={['Framer-motion', 'react-grid-layout', 'JSON WebTokens', 'MySQL/Sequelize', 'Material UI']}
                                link= 'https://octowaggle.herokuapp.com/'
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item md={12}>
                    <Paper className={classes.paper}>Certifications</Paper>
                </Grid>

            </Grid>
        </div>
    )
}
