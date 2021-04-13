import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CasinoIcon from '@material-ui/icons/Casino';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Login from '../Login/Login'
import { useStyles } from './styles'
import { Box, Button } from '@material-ui/core';
import { Context } from '../../context';
import { BalanceBar } from '../BalanceBar/BalanceBar';


export default function MenuAppBar() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const chevere = useContext(Context)


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <CasinoIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Online Casino
                    </Typography>
                    {!chevere?.state.username
                        ?
                        <div>
                            <Button className={classes.loginBtn}
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit">Log in</Button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <Login handleClose={handleClose} />
                            </Menu>
                        </div>
                        :
                        <Box className={classes.box} m={1}>
                            <BalanceBar></BalanceBar>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />

                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <Button variant="contained" onClick={() => { chevere?.authAction.handleLogout(); handleClose() }} >LOG OUT</Button>
                            </Menu>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}