import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.down(399)]: {
    device: props => ({
      marginLeft: props.deviceName === "macbook-pro" ? "-36px": "auto",
      marginRight: "auto",
    }),
  },
  [theme.breakpoints.up(0)]: {
    container: {
      maxWidth: 850,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20,
  },
    stepper: {
      width: 214,
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#fdf6e3",
    },
  },
  [theme.breakpoints.up(400)]: {
    device: {
      marginLeft: "auto",
      marginRight: "auto",
    },  
  },
  [theme.breakpoints.up(870)]: {
    gridContainer: {
      maxWidth: 870,
      marginLeft: "auto",
      marginRight: "auto",
    },
    stepper: {
      width: 321,
    },
  },  
  [theme.breakpoints.up('lg')]: {
    gridContainer: {
      maxWidth: 1020,
    },
  },
}));



export function DeviceContainer(props) {
  const classes = useStyles(props);
  const images = props.images;
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
      <div style={{transformOrigin: "top center", transform: "scale(1)"}}>
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
                  <img className="device-content" alt="" src={`data/${image}`}/>
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
