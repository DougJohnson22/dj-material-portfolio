import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AdjustIcon from '@material-ui/icons/Adjust';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'show',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '75%',
        height: '100%',
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const tileData = [
    {
        img: "https://thumbs2.imgbox.com/54/fc/4THVB1Rj_t.jpg",
        title: 'Musician',
        featured: true,
    },
    {
        img: "https://thumbs2.imgbox.com/fa/a9/UOkJvLJN_t.jpg",
        title: 'Journeyman Baker',
        featured: false,
    },
    {
        img: "https://thumbs2.imgbox.com/fb/a9/tPZeeKr7_t.jpg",
        title: 'Winemaker',
        featured: false,
    },
    {
        img: "https://thumbs2.imgbox.com/c7/a5/nPvgAeSz_t.jpg",
        title: 'Beer Brewer',
        featured: false,
    },
    {
        img: "https://thumbs2.imgbox.com/e0/ae/CRkJPwiX_t.jpg",
        title: 'Adventurer',
        featured: false,
    },
    {
        img: "https://thumbs2.imgbox.com/2a/f0/jkmZYPBr_t.jpg",
        title: 'Professional Game Master',
        featured: true,
    },
];



export default function HistoryGrid() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionIcon={
                                <IconButton aria-label={`open ${tile.title}`} className={classes.icon} onClick={handleOpen}>
                                    <AdjustIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}

                {/* <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Transition modal</h2>
                            <p id="transition-modal-description">react-transition-group animates me.</p>
                        </div>
                    </Fade>
                </Modal> */}
            </GridList>
        </div>
    );
}