import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    content: {
        padding: theme.spacing(1),
        width: "80%",
        justifyContent: "center",
    }
}));

export default function Splash() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.content} variant="h1" component="h2" gutterBottom>
                            Douglas Johnson
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <img className={classes.content} src="https://www.rewireme.com/wp-content/uploads/2015/05/052215_How-to-Be-Yourself3.jpg" alt="coding waterfall" />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>About Me</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Tech Stack</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
