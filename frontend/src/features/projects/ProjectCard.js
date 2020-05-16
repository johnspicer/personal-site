import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PublicIcon from '@material-ui/icons/Public';
import CodeIcon from '@material-ui/icons/Code';
import NearMeIcon from '@material-ui/icons/NearMe';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectModal } from './ProjectModal';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.up(0)]: {
        card: {
            height: 250,
            width: 250,
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: 40,
            backgroundColor: "#eee8d5",
            border: "3px solid transparent",
            '&:hover': {
               border: "3px solid #268bd2",
            },
        },
        cardTitle: {
            fontSize: 22,
            color: "#073642",
            fontFamily: "Avenir Next",
        },
        icon: {
            fontSize: 175,
            marginTop: 20,
            color: "#073642",
        }
    },
    [theme.breakpoints.up(600)]: {
        card: {
            height: 175,
            width: 175,
            marginRight: "auto",
            marginLeft: "auto",
        },
        cardTitle: {
            fontSize: 18,
        },
        icon: {
            fontSize: 120,
        }
    },
    [theme.breakpoints.up(870)]: {
        card: {
            height: 200,
            width: 250,
            marginRight: "auto",
            marginLeft: "auto",
        },
        cardTitle: {
            fontSize: 22,
        },
        icon: {
            fontSize: 130,
        }
    },
    [theme.breakpoints.up('lg')]: {
        card: {
            height: 250,
            width: 300,
            marginRight: "auto",
            marginLeft: "auto",
        },
        cardTitle: {
            fontSize: 28,
        },
        icon: {
            fontSize: 175,
        }
    },
}));

export function ProjectCard(props) {
    const [showModal, setShowModal] = React.useState(false);
    const classes = useStyles();

    const handleProjectCardClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const iconNameToComponentMap = {
        "phone": PhoneIphoneIcon,
        "web": PublicIcon,
        "boids": NearMeIcon,
    }

    const IconComponent = iconNameToComponentMap[props.projectInfo.icon] || CodeIcon;

    // if (props.projectInfo.slug == "project-1" && !showModal) {
    //     setShowModal(true);
    // }
    return (
        <Card className={classes.card} elevation={0}>
            <CardActionArea
                onClick={handleProjectCardClick}
            >
                <IconComponent className={classes.icon}/>
            <div className={classes.cardTitle}>{props.projectInfo.title}</div>
            </CardActionArea>
            { showModal && <ProjectModal projectInfo={props.projectInfo} closeModal={handleCloseModal}/>}
        </Card>
    )

}