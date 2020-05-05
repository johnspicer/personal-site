import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            minHeight: 400,
            backgroundColor: "#fdf6e3",
        },
        titleText: {
            fontSize: 28,
            paddingTop: 10,
            paddingBottom: 10,
            color: "#cb4b16",
        },
        textContainer: {
            fontSize: 14,
            maxWidth: 320,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
        },
    },
    [theme.breakpoints.up(600)]: {
        titleText: {
            fontSize: 36,
            paddingTop: 30,
            paddingBottom: 30,
        },
        textContainer: {
            fontSize: 18,
            maxWidth: 600,
        },
    },
    [theme.breakpoints.up(870)]: {
        textContainer: {
            maxWidth: 870,
        },       
    },
}));

export function AboutMeContainer(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.titleText}>
                Experience
            </div>
            <div className={classes.textContainer}>
                I'm a full stack software developer with 10 years experience across a range of technologies.
                My most recent permanent position has been as a Technical Architect at EDITED, a London based startup where I've worked for 5 1/2 years.
                This has involved a large number of responsibilities, such as:
                <ul style={{marginBottom: 0}}>
                    <li>Leading a team of 9 frontend and backend developers</li>
                    <li>Having regular meetings with the commercial exec team, setting technical direction of the product</li>
                    <li>Working daily with multiple <strong>Elasticsearch</strong> clusters, the largest being 100+ nodes</li>
                    <li>Managing the ingestion of 24M data points per day across 5,500 <strong>web crawlers</strong></li>
                    <li>Day to day working with services like <strong>RabbitMQ</strong>, <strong>Redis</strong>, <strong>Riak</strong>, <strong>Memcache</strong> </li>
                    <li>Writing and managing multiple Python web services, in <strong>Django</strong> and <strong>Flask</strong></li>
                    <li>Working across the frontends of multiple services, using <strong>React</strong></li>
                    <li>Provisioning bare metal servers from multiple providers</li>
                    <li>Writing and managing an <strong>Apache Storm</strong> cluster capable of processing thousands of messages per second</li>
                </ul>
            </div>
        </div>
    )
}