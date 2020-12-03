import { Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Navbar } from 'reactstrap';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    appbar: {
        position: 'sticky',
        marginTop: '0px',
        background: 'white',
        color: 'black'
    },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <>
            <Navbar color="dark" dark className="top-header">
                <Typography variant="subtitle1">
                    <Link href="#">Enjoy complimentary standard shipping on all orders.&nbsp;&nbsp;+</Link>
                </Typography>
            </Navbar>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <div className="main-div">
                        <div className="inner-1st-div">
                            <Link href="#">Shop</Link>
                            <Link href="#">Read</Link>
                            <Link href="#">Stores</Link>
                            <Link href="#">Search</Link>
                        </div>
                        <div className="inner-2nd-div">
                            <Link href="#">Login</Link>
                            <Link href="#">Cart</Link>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Header;