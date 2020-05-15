import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            backgroundColor: "#fdf6e3",
            paddingBottom: 10,
            paddingTop: 20,
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
            maxWidth: 320,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
            paddingTop: 30,
        },
        text: {
            fontSize: 14,
            marginLeft: 20,
            paddingBottom: 30,
        },
        link: {
            color: "#268bd2",
        }
    },
    [theme.breakpoints.up(600)]: {
        titleContainer: {
            maxWidth:600,
        },
        titleText: {
            fontSize: 58,
        },
        text: {
            fontSize: 18,
        },
        textContainer: {
            maxWidth: 600,
        },
    },
    [theme.breakpoints.up(870)]: {
        titleContainer: {
            maxWidth:870,
        },
        textContainer: {
            maxWidth: 870,
        },       
    },
}));

export function ContactContainer(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <div className={classes.titleText}>
                    Contact
                </div>
            </div>
            <div className={classes.textContainer}>
                <div className={classes.text}>
                    If you have a problem that needs solving, I'd love to help with it! Email me at <a className={classes.link} href="mailto:hello@johnspicer.co.uk">hello@johnspicer.co.uk</a>
                </div>
            </div>
        </div>
    )
}