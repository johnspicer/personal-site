import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectCard } from './ProjectCard';
import data from '../../data/data.json';

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.up(0)]: {
    gridContainer: {
      maxWidth: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    titleText: {
        fontSize: 36,
        paddingTop: 30,
        paddingBottom: 30,
        color: "#6c71c4",
    },    
  },
  [theme.breakpoints.up(870)]: {
    gridContainer: {
      maxWidth: 870,
      marginLeft: "auto",
      marginRight: "auto",
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
        <Grid className={classes.gridItem} item xs={12} sm={4}>
          <ProjectCard projectInfo={project}/>
        </Grid>
      );
  });

  return (
    <div style={{backgroundColor: "#eee8d5"}}>
      <div className={classes.titleText}>
          Projects
      </div>
      <Grid className={classes.gridContainer} container>
        {gridItems}
      </Grid>
    </div>
  )
}


