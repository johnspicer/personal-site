import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            paddingTop: 20,
            backgroundColor: "#2aa198",
        },
        titleText: {
            fontSize: 28,
            paddingTop: 10,
            textAlign: "left",
            color: "white",
            lineHeight: "35px",
            marginLeft: 20,
        },
        titleContainer: {
            maxWidth:320,
            marginLeft: "auto",
            marginRight: "auto",            
        },
        textContainer: {
            fontSize: 16,
            maxWidth: 320,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
            color: "white",
            paddingBottom: 20,
        },
        subtitleText: {
            fontSize: 14,
            textAlign: "left",
            color: "#eee8d5",
            marginLeft: 20,
            paddingBottom: 30,
        },
    },
    [theme.breakpoints.up(600)]: {
        titleContainer: {
            maxWidth:600,
        },
        titleText: {
            fontSize: 58,
        },
        subtitleText: {
            fontSize: 21,
        },
        textContainer: {
            fontSize: 18,
            maxWidth: 600,
        },
    },
    [theme.breakpoints.up(870)]: {
        subtitleText: {
            fontSize: 24,
        },
        titleContainer: {
            maxWidth:870,
        },
        textContainer: {
            maxWidth: 870,
        },       
    },
}));

export function AboutMeContainer(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <div className={classes.titleText}>
                    About Me
                </div>
            </div>
            <div className={classes.titleContainer}>
                <div className={classes.subtitleText}>
                    <i>Hi I'm John</i>
                </div>
            </div>
            <Grid container className={classes.textContainer} spacing={4}>
                <Grid item xs={12} md={6}>
                    I'm a full stack software developer with 10 years' experience across a range of technologies. I love writing code and solving problems, and I bring this excitement and commitment to any project I'm doing. I am currently a Technical Architect at EDITED, a London based startup, where I lead a team of 9 developers. My role involves setting the technical direction of the product, and of course writing code every day.
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    I have had extensive experience running large enterprise projects, as well as smaller standalone apps. I'm able to communicate the technicalities of a project and understand the bigger vision behind them. If you're looking for someone to run a technical project, however large or small, get in touch, I'd love to hear from you!
                </Grid>
                
            </Grid>
        </div>
    )
}