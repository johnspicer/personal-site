import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            minHeight: 400,
            backgroundColor: "#fdf6e3"
        },
        titleText: {
            fontSize: 28,
            paddingTop: 10,
            paddingBottom: 10,
            color: "#cb4b16",
        },
        text: {
            fontSize: 14,
        },
        gridContainer: {
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 280,
          textAlign: "left",
        }
    },
    [theme.breakpoints.up(375)]: {
        gridContainer: {
          maxWidth: 320,
        }
    },
    [theme.breakpoints.up('sm')]: {
        titleText: {
            fontSize: 36,
            paddingTop: 30,
            paddingBottom: 30,
        },
        text: {
            fontSize: 18,
        },        
        gridContainer: {
          maxWidth: 600,
        }
    },
    [theme.breakpoints.up('lg')]: {
        gridContainer: {
          maxWidth: 870,
        }
    },
}));

export function AboutMeContainer(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.titleText}>
                Experience
            </div>
            <Grid className={classes.gridContainer} container spacing={4}>
                <Grid className={classes.text} item xs={12} sm={12}>
                    I'm a software developer with 10 years experience across a range of technologies.
                    My most recent permanent position has been at EDITED, a retail decision platform, where I've worked for 5 1/2 years.
                    I joined the company at 21 people and it's now 100, and I've had a host of responsibilities.
                    Some of these are:
                    <ul>
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
                </Grid>
            </Grid>
        </div>
    )
}