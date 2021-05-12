import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Button, Typography } from '@material-ui/core';

import {
  NavLink,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  navLink: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          exact to="/"
        >
          Chrystian de Matos
        </Typography>
        <Button
          variant="h6"
          className={classes.navLink}
          component={NavLink}
          to="/sobre"
        >
          Sobre
        </Button>
        <Button
          variant="h6"
          className={classes.navLink}
          component={NavLink}
          to="/portfolio"
        >
          Portfólio
        </Button>
        {/* <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          exact to="/"
        >
          Chrystian de Matos
        </Typography> */}
        {/* <Button component={Link} to="/about" color="inherit">Login</Button>
        <NavLink to="/about" activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Login</NavLink > */}
      </Toolbar>
    </AppBar>
  )
}
