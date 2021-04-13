import React, { useEffect, useState, useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import { useStyles } from './styles';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { RandomNumGeneratir } from '../RandomNumGenerator/RandomNumGeneratir'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export const PopoverView = () => {

    const firstRef = React.createRef<any>();
    const secondRef = React.createRef<any>();
    const thirdRef = React.createRef<any>();

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const globalRandom = () => {
        firstRef?.current?.random()
        secondRef?.current?.random()
        thirdRef?.current?.random()
    }

    const body = (
        <div className={classes.divCon}>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        <Grid key={0} item>
                            <Paper className={classes.paperGrid}>
                                <RandomNumGeneratir ref={firstRef}></RandomNumGeneratir>
                            </Paper>
                        </Grid>
                        <Grid key={1} item>
                            <Paper className={classes.paperGrid}>
                                <RandomNumGeneratir ref={secondRef}></RandomNumGeneratir>
                            </Paper>
                        </Grid>
                        <Grid key={2} item>
                            <Paper className={classes.paperGrid}>
                                <RandomNumGeneratir ref={thirdRef}></RandomNumGeneratir>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <ButtonGroup className={classes.buttonGroup} variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={globalRandom}>PLAY</Button>
                <Button>DEBUG</Button>
                <Button onClick={handleClose}>CLOSE</Button>
            </ButtonGroup>
        </div>
    );

    return (
        <div>
            <div className={classes.buttonDiv}>
                <Button className={classes.button} type="button" onClick={handleOpen}>
                    Open Modal
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                disableBackdropClick={true}
            >
                {body}
            </Modal>
        </div>
    );
}
