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
                About
            </div>
            <Grid className={classes.gridContainer} container spacing={4}>
                <Grid className={classes.text} item xs={12} sm={6}>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Grid>
                <Grid className={classes.text} item xs={12} sm={6}>
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                </Grid>
            </Grid>
        </div>
    )
}