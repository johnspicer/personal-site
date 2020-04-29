import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectCard } from './ProjectCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.up(0)]: {
    container: {
      maxWidth: 850,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20,
  },
    device: {
      marginLeft: "auto",
      marginRight: "auto",
    },  
    stepper: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  [theme.breakpoints.up(870)]: {
    device: {
      marginLeft: "auto",
      marginRight: "auto",
    },
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



export function DeviceContainer(props) {
  const classes = useStyles();
  const images = props.images;
  const matches = useMediaQuery('(min-width:1px)');
          {/*<video className="device-content" autoplay loop>
            <source src="/data/redeem-2.mp4" type="video/mp4"/>
          </video>*/}
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const renderDevice = (deviceName) => {
    return (
      <div style={{transformOrigin: "top", transform: "scale(0.5)"}}>
        <div className={`device device-${deviceName} ${classes.device}`}>
          <div className="device-frame">
            <SwipeableViews
              axis={'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img className="device-content" src={`data/${image}`}/>
                </div>
              ))}
            </SwipeableViews>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
          <div className="device-home"></div>
        </div>
        <MobileStepper
          variant="dots"
          steps={images.length}
          position="static"
          activeStep={activeStep}
          className={classes.stepper}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      {renderDevice(props.deviceName)}
    </div>
  )
}
