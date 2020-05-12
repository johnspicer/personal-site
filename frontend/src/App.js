import React from 'react';
import './App.css';
import './Devices.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ProjectContainer } from './features/projects/ProjectContainer';
import { InfoContainer } from './features/InfoContainer';
import { AboutMeContainer } from './features/AboutMeContainer';
import { SkillsContainer } from './features/SkillsContainer';
import { ContactContainer } from './features/ContactContainer';

const useStyles = makeStyles(theme => ({
  appBar: {
    justifyContent: "center",
    backgroundColor: "#073642",
    alignItems: "center",
    height: 30,
  },
  menuButton: {
    color: "#eee8d5",
    fontSize: 14,
  },
  toolbar: {
    width: "60%",
    justifyContent: "center",
  },
  [theme.breakpoints.up(600)]: {
    appBar: {
      height: 30
    },
    menuButton: {
      fontSize: 22,
    },
    toolbar: {
      justifyContent: "left",
    },
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} elevation={0}  position="sticky">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/*John Spicer*/}
          </IconButton>
        </Toolbar>
      </AppBar>
      <InfoContainer/>
      <AboutMeContainer />
      <SkillsContainer />
      <ProjectContainer/>
      <ContactContainer/>
      <AppBar className={classes.appBar} elevation={0} position="sticky">
        <Toolbar>
          Built by me
          <a href="https://github.com/johnspicer/personal-site" target="_blank" style={{color: "white"}}><GitHubIcon style={{marginLeft: 20}}/></a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
