import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            minHeight: 500,
            paddingTop: 20,
            backgroundColor: "#eee8d5",
        },
        titleText: {
            marginLeft: 20,
            fontSize: 28,
            paddingTop: 10,
            textAlign: "left",
            color: "#2aa198",
            lineHeight: "35px",
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
            color: "#002b36",
            paddingBottom: 20,
        },
        subtitleText: {
            fontSize: 14,
            textAlign: "left",
            color: "#839496",
            marginLeft: 20,
            paddingBottom: 30,
        },
        card: {
            backgroundColor: "#eee8d5",
            height: 150,
            width: 300,
            textAlign: "center",
        },
        cardNumber: {
            color: "#dc322f",
            fontSize: 18,
            textTransform: "uppercase",
            fontWeight: 650,
            textAlign: "left",
            marginRight: 10,
        },
        cardTitle: {
            fontSize: 18,
            textTransform: "uppercase",
            fontWeight: 650,
        },
        cardListContainer: {
            textAlign: "left",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
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
        card: {
            height: 200,
        },
    },
    [theme.breakpoints.up(870)]: {
        titleContainer: {
            maxWidth:870,
        },
        textContainer: {
            maxWidth: 870,
        },       
        subtitleText: {
            fontSize: 24,
        },
    },
}));

export function SkillsContainer(props) {
    const classes = useStyles();

    const skillsData = [{
        "title": "Python",
        "subtitles": [
            "Extensive experience writing enterprise webservers in Django and Flask, as well as a host of other applications from automation tools to web crawlers"
        ]       
    }, {
        "title": "Javascript",
        "subtitles": [
            "Writing websites in React, as well as sites for clients using vanilla Javascript. React Native for iOS and Android apps."
        ]    
    }, {
        "title": "Devops & Infrastructure",
        "subtitles": [
            "Deploying to multiple different server providers, from bare metal to managed services like AWS, GCP and Google Firebase.",
        ]    
    }, {
        "title": "Data Stores",
        "subtitles": [
            "Day to day work over 5 years with data stores like Elasticsearch, Riak, SQL, Redis and RabbitMQ.",
        ]    
    }, {
        "title": "Management",
        "subtitles": [
            "React & React Native",
            "HTML & CSS",
        ]    
    }, {
        "title": "Management",
        "subtitles": [
            "React & React Native",
            "HTML & CSS",
        ]    
    }]

    const cards = skillsData.map((skillData, index) => {
        const {title, subtitles} = skillData;

        return (
            <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} elevation={0}>
                    <div style={{display: "flex"}}>
                        <div className={classes.cardNumber}>{index+1}</div>
                        <div className={classes.cardTitle}>
                            {title}
                        </div>
                    </div>
                    <div className={classes.cardListContainer}>
                    {
                        subtitles.map(subtitle => {
                            return (
                                <div style={{}}>
                                    {subtitle}
                                </div>
                            );
                        })
                    }
                    </div>
                </Card>
            </Grid>
        )

    });

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
                    Skills
                </div>
            </div>
            <div className={classes.titleContainer}>
                <div className={classes.subtitleText}>
                    <i>Full Stack Software Developer with 10 years experience</i>
                </div>
            </div>
            <Grid container className={classes.textContainer} spacing={6}>
                    {cards}
            </Grid>
        </div>
    )
}