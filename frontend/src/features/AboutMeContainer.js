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
            fontSize: 14,
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

    // <li>Leading a team of 9 frontend and backend developers</li>
    //                 <li>Setting technical direction of the product</li>
    //                 <li>Working daily with multiple <strong>Elasticsearch</strong> clusters, the largest being 100+ nodes</li>
    //                 <li>Managing the ingestion of 24M data points per day across 5,500 <strong>web crawlers</strong></li>
    //                 <li>Day to day working with services like <strong>RabbitMQ</strong>, <strong>Redis</strong>, <strong>Riak</strong>, <strong>Memcache</strong> </li>
    //                 <li>Writing and managing multiple Python web services, in <strong>Django</strong> and <strong>Flask</strong></li>
    //                 <li>Working across the frontends of multiple services, using <strong>React</strong></li>
    //                 <li>Provisioning bare metal servers from multiple providers</li>
    //                 <li>Writing and managing an <strong>Apache Storm</strong> cluster capable of processing thousands of messages per second</li>

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
                    I'm a full stack software developer with 10 years experience across a range of technologies.
                    My most recent permanent position has been as a Technical Architect at EDITED, a London based startup where I've worked for 5 1/2 years.
                    This has involved a large number of responsibilities, such as:
                </Grid>
                <Grid item xs={12} md={6}>
                    I'm a full stack software developer with 10 years experience across a range of technologies.
                    My most recent permanent position has been as a Technical Architect at EDITED, a London based startup where I've worked for 5 1/2 years.
                    This has involved a large number of responsibilities, such as:
                </Grid>
                
            </Grid>
        </div>
    )
}