import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectCard } from './ProjectCard';
import data from '../../data/data.json';

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.up(0)]: {
    container: {
      backgroundColor: "#fdf6e3",
      paddingTop: 20,
    },
    gridContainer: {
      maxWidth: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    titleText: {
        fontSize: 28,
        paddingTop: 10,
        paddingBottom: 10,
        color: "#dc322f",
    },
    text: {
      maxWidth: 320,
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 14,
      textAlign: "left",
      marginBottom: 20,
    },
  },
  [theme.breakpoints.up(600)]: {
      titleText: {
          fontSize: 36,
          paddingTop: 30,
          paddingBottom: 30,
      },
      text: {
        fontSize: 18,
        maxWidth: 600,
      },      
  },
  [theme.breakpoints.up(870)]: {
    gridContainer: {
      maxWidth: 870,
      marginLeft: "auto",
      marginRight: "auto",
    },
    text: {
      fontSize: 18,
      maxWidth: 870,
    },    
  },  
  [theme.breakpoints.up('lg')]: {
    gridContainer: {
      maxWidth: 1020,
    },
  },
}));

export function ProjectContainer() {
  const classes = useStyles();

  const gridItems = data.map(project => {
      return (
        <Grid item xs={12} sm={4}>
          <ProjectCard projectInfo={project}/>
        </Grid>
      );
  });

  return (
    <div className={classes.container}>
      <div className={classes.titleText}>
          Projects
      </div>
      <div className={classes.text}>
        Below are a selection of projects I've worked on - either in my own time, or on a freelance basis.
      </div>
      <Grid className={classes.gridContainer} container>
        {gridItems}
      </Grid>
    </div>
  )
}


