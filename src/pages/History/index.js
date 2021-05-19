import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AdjustIcon from '@material-ui/icons/Adjust';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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
}));


const tileData = [
    {
        img: "https://i.postimg.cc/JnKMVgp0/git.jpg",
        title: 'Musician',
        featured: true,
    },
    {
        img: "https://i.postimg.cc/bJkps56z/bread.jpg",
        title: 'Bread Baker',
        featured: false,
    },
    {
        img: "https://i.postimg.cc/JzzrPPhq/wine.jpg",
        title: 'Winemaker',
        featured: false,
    },
    {
        img: "https://i.postimg.cc/5tJZstpM/b3.jpg",
        title: 'Beer Brewer',
        featured: false,
    },
    {
        img: "https://i.postimg.cc/jS2Tz283/adventure.jpg",
        title: 'Adventurer',
        featured: false,
    },
    {
        img: "https://i.postimg.cc/Gm404N2Z/gm.jpg",
        title: 'Professional Game Master',
        featured: true,
    },
];

export default function HistoryGrid() {
    const classes = useStyles();

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
                                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                    <AdjustIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}