import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectCard } from './ProjectCard';
import data from '../../data/data.json';

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.up(0)]: {
    container: {
      backgroundColor: "#2aa198",
      paddingTop: 20,
    },
    gridContainer: {
      maxWidth: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    titleContainer: {
        maxWidth:320,
        marginLeft: "auto",
        marginRight: "auto",            
    },
    titleText: {
        marginLeft: 20,
        fontSize: 28,
        paddingTop: 10,
        textAlign: "left",
        paddingBottom: 10,
        lineHeight: "35px",
        color: "white",
    },
    text: {
      marginLeft: 20,
      maxWidth: 320,
      fontSize: 14,
      textAlign: "left",
      color: "#eee8d5",
      paddingBottom: 30,
    },
  },
  [theme.breakpoints.up(600)]: {
      titleContainer: {
          maxWidth:600,
      },
      titleText: {
          fontSize: 58,
      },
      text: {
        fontSize: 21,
        maxWidth: 600,
      },      
  },
  [theme.breakpoints.up(870)]: {
    titleContainer: {
        maxWidth:870,
    },
    gridContainer: {
      maxWidth: 870,
      marginLeft: "auto",
      marginRight: "auto",
    },
    text: {
      fontSize: 24,
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
        <Grid key={project.title} item xs={12} sm={4}>
          <ProjectCard projectInfo={project}/>
        </Grid>
      );
  });

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.titleText}>
            Projects
        </div>
      </div>
      <div className={classes.titleContainer}>
        <div className={classes.text}>
          <i>Some projects I'm really proud of</i>
        </div>
      </div>
      <Grid className={classes.gridContainer} container>
        {gridItems}
      </Grid>
    </div>
  )
}


