import React, { useReducer, useEffect, useState, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles'
import { Context } from '../../context';

//state type


const Login = ({ handleClose }: { handleClose: Function }) => {

    const classes = useStyles();

    const chevere = useContext(Context)

    const [username, setUsername] = useState("abc@email.com")

    console.log();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
                <CardHeader className={classes.header} title="Login App" />
                <CardContent>
                    {/* organizar el input */}
                    <div>
                        <TextField
                            error={chevere?.state.isError}
                            fullWidth
                            id="username"
                            type="email"
                            label="Username"
                            placeholder="Username"
                            margin="normal"
                            helperText={chevere?.state.helperText}
                            value={username}
                            onChange={({ target: { value } }) => setUsername(value)}
                        // onKeyPress={chevere?.authAction.handleKeyPress}
                        />
                    </div>
                </CardContent>
                <CardActions>
                    {
                        !chevere?.state.username
                            ?
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className={classes.loginBtn}
                                onClick={() => { chevere?.authAction.handleLogin(username); handleClose() }}

                            // disabled={state.isButtonDisabled}
                            >
                                Login
                            </Button>
                            :
                            <div>
                                HOLA {username}
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    className={classes.loginBtn}
                                    onClick={() => chevere?.authAction.handleLogout()}
                                // disabled={state.isButtonDisabled}
                                >
                                    Logout
                            </Button>
                            </div>
                    }
                </CardActions>
            </Card>
        </form>
    );
}

export default Login;