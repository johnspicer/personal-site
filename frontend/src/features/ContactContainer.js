import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            backgroundColor: "#fdf6e3",
            paddingBottom: 30,
            paddingTop: 20,
        },
        titleText: {
            fontSize: 28,
            paddingTop: 10,
            paddingBottom: 10,
            color: "#268bd2",
        },
        textContainer: {
            fontSize: 14,
            maxWidth: 320,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
            paddingBottom: 10,
        },
        link: {
            color: "#268bd2",
        }
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

export function ContactContainer(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.titleText}>
                Contact
            </div>
            <div className={classes.textContainer}>
                If you have a problem that needs solving, I'd love to help with it! Email me at:
            </div>
            <a className={classes.link} href="mailto:hello@johnspicer.co.uk">hello@johnspicer.co.uk</a>
        </div>
    )
}