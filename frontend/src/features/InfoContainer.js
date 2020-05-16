import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            paddingTop: 20,
            paddingBottom: 20,
            height: 320,
            width: "100%",
            backgroundColor: "#eee8d5",
        },
        grid: {
            height: "100%",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        gridCell: {
            display: "flex",
        },
        avatar: {   
            width: 150, 
            height:150, 
            borderRadius: "50%",    
        },  
        avatarContainer: {  
            margin: "auto",
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
    [theme.breakpoints.up('md')]: {
        container: {
            paddingTop: 0,
            paddingBottom: 0,
            height: 650,
            width: "100%",
        },
        grid: {
            width: 960,
        },
        avatar: {   
            width: 350, 
            height:350, 
        },
        titleText: {
            fontSize: 36,
        },
        infoText: {
            fontSize: 28,
            maxWidth: 500,
        },
    },
    [theme.breakpoints.up(1100)]: {
        grid: {
            width: 1100,
        },
    },
}));

export function InfoContainer(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid className={classes.grid} container>
                <Grid className={classes.gridCell} item xs={12} md={6}>
                    <Box className={classes.avatarContainer}>
                        <img
                        alt=""
                        className={classes.avatar}
                        src="data/me.png"
                        />
                    </Box>
                </Grid>
                <Grid className={classes.gridCell} item xs={12} md={6}>
                    <div style={{margin: "auto"}}>
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
                                    hello@johnspicer.co.uk
                            </div>
                        </a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )

}