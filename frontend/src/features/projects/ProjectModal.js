import React from 'react';
import Chip from '@material-ui/core/Chip';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
        backgroundColor: 'white',
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
        marginTop: 20,
        maxWidth: 650,
        marginRight: "auto",
        marginLeft: "auto",
        color: "#073642",
    },
    chip: {
        marginLeft: 5,
        marginBottom: 5,
        backgroundColor: "#268bd2",
        color: "#fdf6e3",
        fontFamily: "Avenir Next",
    },
    grid: {
        marginTop: 20,
        maxWidth: 650,
        marginRight: "auto",
        marginLeft: "auto",
    },
    [theme.breakpoints.up(600)]: {
        paper: {
            height: '90%',
            width: '70%',
            border: '2px solid #000',
        }, 
    },
    [theme.breakpoints.up(600)]: {
        paper: {
            height: '90%',
            width: '90%',
        }, 
    }
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

    const images = props.projectInfo.images
        .map(image => {
            const imageURL = `/data/${image}`;
            return (
                <GridListTile key={image} cols={1}>
                    <img src={imageURL} />
                </GridListTile>
            );
        })

    const breakpoints = props.projectInfo.device.startsWith("iphone") ? {
        xs: 12,
        md: 6
    } : {
        xs: 12,
        md: 12,
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
                            </Grid>
                            <Grid item xs={breakpoints.xs} md={breakpoints.md}>
                                <DeviceContainer deviceName={props.projectInfo.device} images={props.projectInfo.images}/>
                            </Grid>
                        </Grid>
                        {/*<GridList cellHeight={700} className={classes.gridList} cols={2}>
                            {images}
                        </GridList>*/}
                            {/*<iframe height="700" width="700" src="https://johnspicer.github.io/boids/"></iframe>*/}
                    </div>
                </div>

            </Fade>
        </Modal>
    )

}