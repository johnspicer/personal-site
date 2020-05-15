import React from 'react';
import Chip from '@material-ui/core/Chip';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceContainer } from './DeviceContainer';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        height: '100%',
        width: '100%',
        textAlign: "center",
        outline: 'none',
        overflow: "scroll",
        backgroundColor: "#fdf6e3",
    },
    content: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        fontFamily: "Avenir Next",
    },
    titleText: {
        fontSize: 36,
        color: "#073642",
    },
    text: {
        padding: 10,
        textAlign: "left",
    },
    chipContainer: {
        marginTop: 30,
        marginBottom: 30,
        maxWidth: 650,
        marginRight: "auto",
        marginLeft: "auto",
        color: "#073642",
    },
    chip: {
        marginLeft: 5,
        marginBottom: 5,
        backgroundColor: "#2aa198",
        color: "#fdf6e3",
        fontFamily: "Avenir Next",
        fontSize: 18,
    },
    grid: {
        maxWidth: 800,
        marginRight: "auto",
        marginLeft: "auto",
    },
    testimonial: {
        fontStyle: "italic",
        marginTop: 30,
    },
    testimonialPerson: {
        fontStyle: "italic",
        color:"#2aa198"
    },
    [theme.breakpoints.up('lg')]: {
        grid: {
            width: 500,
        },
        paper: {
            height: '90%',
            width: '90%',
            maxWidth: 1100,
            border: '2px solid #000',
        }, 
    [theme.breakpoints.up(1000)]: {
        grid: {
            width: 800,
        }
    },
    },
}));

export function ProjectModal(props) {
    const classes = useStyles();

    const chips = props.projectInfo.technologies
        .sort((a, b) => {
            return b.length - a.length;
        })
        .map(tech => {
            return (
                <Chip
                    className={classes.chip}
                    label={tech}
                />
            )
        });

    const breakpoints = props.projectInfo.device.startsWith("iphone") ? {
        xs: 12,
        md: 6
    } : {
        xs: 12,
        md: 12,
    };

    const renderTestimonial = () => {
        if (props.projectInfo.testimonial) {
            return (
                <div className={classes.testimonial}>
                    "{props.projectInfo.testimonial}"
                    <div className={classes.testimonialPerson}>
                    {props.projectInfo.testimonialPerson}
                    </div>
                </div>
            )
        }
        return null;
    };

    return (
        <Modal
            open={true}
            className={classes.modal}
            onClose={props.closeModal}
            closeAfterTransition
        >
            <Fade in={true}>
                <div className={classes.paper}>
                    <CloseIcon onClick={props.closeModal} style={{cursor: "pointer", float: "right", fontSize: 48}}/>
                    <div className={classes.content}>
                        <div className={classes.titleText}>{props.projectInfo.title}</div>
                        <div className={classes.chipContainer}>
                            {chips}
                        </div>
                        <Grid className={classes.grid} container>
                            <Grid className={classes.text} item xs={breakpoints.xs} md={breakpoints.md}>
                                {props.projectInfo.content}
                                <br/>
                                <br/>
                                {props.projectInfo.content2}
                                {renderTestimonial()}
                            </Grid>
                            <Grid item xs={breakpoints.xs} md={breakpoints.md}>
                                <DeviceContainer deviceName={props.projectInfo.device} images={props.projectInfo.images}/>
                            </Grid>
                        </Grid>
                        {/*<GridList cellHeight={700} className={classes.gridList} cols={2}>
                            {images}
                        </GridList>*/}
                        {/*<iframe height="800" width="800" src="https://johnspicer.github.io/boids/?height=800"></iframe>*/}
                    </div>
                </div>

            </Fade>
        </Modal>
    )

}