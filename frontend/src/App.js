import React from 'react';
import './App.css';
import './Devices.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ProjectContainer } from './features/projects/ProjectContainer';
import { InfoContainer } from './features/InfoContainer';
import { AboutMeContainer } from './features/AboutMeContainer';

const useStyles = makeStyles(theme => ({
  appBar: {
    justifyContent: "center",
    backgroundColor: "#073642",
    alignItems: "center",
    height: 110
  },
  menuButton: {
    color: "#eee8d5",
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} elevation={0} position="sticky">
        <Toolbar style={{width: "60%"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            John Spicer
          </IconButton>
        </Toolbar>
      </AppBar>
      <InfoContainer/>
      <AboutMeContainer />
      <ProjectContainer/>
      <AppBar className={classes.appBar} elevation={0} position="sticky"/>
    </div>
  );
}

export default App;
