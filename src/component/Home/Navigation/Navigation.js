import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';

export default function Navigation() {
    const usestyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none',
        }
    })
    const {navItem} = usestyle();
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor's Hub
                    </Typography>
                    <Link className={navItem} to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link className={navItem} to="/appointments">
                        <Button color="inherit">Appointments</Button>
                    </Link>
                    <Link className={navItem} to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </Link>
                    <Link className={navItem} to="/dashboard">
                        <Button color="inherit">About</Button>
                    </Link>
                    {
                        user?.email ?
                            <Button onClick={logout} variant="contained"> Logout</Button> :
                            <Link className={navItem} to="/login">
                                <Button color="inherit">Login</Button>
                            </Link>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}