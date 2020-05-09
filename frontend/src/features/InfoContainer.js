import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        container: {
            height: 340,
            width: "100%",
            backgroundColor: "#eee8d5",
            display: "table",
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
        button: {
            margin: theme.spacing(1),
            color: "#268bd2",
        },
    },
    [theme.breakpoints.up(600)]: {
        container: {
            height: 650,
            width: "100%",
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
    console.log(props)
    const handleClick = () => {
        props.blah.scrollIntoView()
        // window.scrollTo({left: 0, top: window.innerHeight, behavior: 'smooth'});
    }

    return (
        <div className={classes.container}>
            <div style={{"display": "table-cell", "verticalAlign": "middle"}}>
                <div className={classes.titleText}>
                    John Spicer
                </div>
                <hr style={{borderColor: "black", width: 200}}/>
                <div className={classes.infoText}>
                    Freelance Software Engineer
                </div>
            </div>
        </div>
    )

}