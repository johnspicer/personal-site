import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            height: 370,
            width: "100%",
            backgroundColor: "#eee8d5",
        },
        avatar: {   
            width: 150, 
            height:150, 
            borderRadius: "50%",    
        },  
        avatarContainer: {  
            paddingTop: 40, 
            paddingBottom: 20,
        },
        titleText: {
            fontSize: 28,
            color: "#002b36",
        },
        infoText: {
            color: "#002b36",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
            maxWidth: 350,
            fontSize: 18,
        },
        emailButton: {
            display: "flex",
            width: 200,
            marginLeft: "auto",
            marginRight: "auto",
            textDecoration: "none",
        }
    },
    [theme.breakpoints.up(600)]: {
        container: {
            height: 650,
            width: "100%",
        },
        avatarContainer: {  
            paddingTop: 80, 
        },
        avatar: {   
            width: 300, 
            height:300, 
        },
        titleText: {
            fontSize: 36,
        },
        infoText: {
            fontSize: 28,
            maxWidth: 500,
        },
    },
    [theme.breakpoints.up('lg')]: {
    },
}));

export function InfoContainer(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Box className={classes.avatarContainer}>
                <img
                className={classes.avatar}
                src="https://www.nicepng.com/png/detail/810-8105444_male-placeholder.png"
                />
            </Box>
            <div className={classes.titleText}>
                John Spicer
            </div>
            <hr style={{borderColor: "black", width: 200}}/>
            <div className={classes.infoText}>
                Freelance Software Engineer
            </div>
            <a href="mailto:hello@johnspicer.co.uk" className={classes.emailButton}>
                <MailOutlineIcon style={{color: "#268bd2"}}/>
                <div style={{marginLeft: 10, lineHeight: "24px", color: "#268bd2"}}>
                        hello@johnspicer.com
                </div>
            </a>
        </div>
    )

}