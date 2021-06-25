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
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        background: "#FFFFF0",
        '&:hover': {
            background: "#ffffd6",
        },
        fontFamily: 'Hammersmith One',
        maxWidth: '100%'
    },


    content: {
        padding: 0,
        width: "100%",
        justifyContent: "center",
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        '& .MuiCardContent-root > p:first-child': { fontFamily: 'Hammersmith One' },
        '& .MuiTypography-body2': { fontFamily: 'Raleway' }
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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.paper}
                        >
                            History
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
                            Released Apps
                        </AccordionSummary>
                        <AccordionDetails className={classes.content}>
                            <Grid container spacing={2} justify='space-evenly'>

                                <Grid item style={{ margin: '1em' }}>
                                    <AppCard
                                        sg='G'
                                        title='DunGen'
                                        subheader='BootCamp Project: We created a drag and drop RPG map creator focused on ease of use.'
                                        img='https://images2.imgbox.com/17/7d/4IMeXTWp_o.jpg'
                                        imgtitle="DunGen Dragon"
                                        summary={'My Tech Stack: JSON WebTokens + MySQL/Sequelize + Material UI + Node.js'}
                                        expandhead='Project Tech Stack'
                                        expandpara={['Framer-motion', 'React-Grid-Layout', 'JSON WebTokens', 'MySQL + Sequelize', 'Heroku SQL', 'Material UI', 'Node.js']}
                                        link='https://octowaggle.herokuapp.com/'
                                    />
                                </Grid>

                                <Grid item style={{ margin: '1em' }}>
                                    <AppCard
                                        sg='G'
                                        title='Despensa'
                                        subheader='BootCamp Project: We created a pantry app to organize your home with customized locations.'
                                        img='https://images2.imgbox.com/df/ec/NTU2ZvEt_o.png'
                                        imgtitle="The Cado Family"
                                        summary='My Tech Stack: Express + Handlebars + Session, MySQL + Sequelize, Heroku SQL, Node.js'
                                        expandhead='Primary Tech Stack'
                                        expandpara={['Bcrypt', 'Express + Handlebars + Session', 'MySQL + Sequelize', 'Heroku SQL', 'Day.js', 'Node.js']}
                                        link='https://quiet-sands-24336.herokuapp.com/'
                                    />
                                </Grid>

                                <Grid item style={{ margin: '1em' }}>
                                    <AppCard
                                        sg='S'
                                        title='Readme Generator'
                                        subheader='BootCamp Assignment: Generate a Readme file through command line prompts.'
                                        img='https://images2.imgbox.com/42/97/k8p0wc5U_o.png'
                                        imgtitle="Console Example"
                                        summary=''
                                        expandhead='Primary Tech Stack'
                                        expandpara={['Node.js']}
                                        link='https://github.com/DougJohnson22/ReadMe-Gen'
                                    />
                                </Grid>


                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item md={12}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.paper}
                        >
                            Certifications
                        </AccordionSummary>
                        <AccordionDetails className={classes.content}>
                            I am a UW Certified Full Stack Web Developer. I bring an adaptive problem solving mindset to every project I contribute to and am of the "rising tides" mentality when it comes to working with others at every level of my career.
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>
        </div>
    )
}