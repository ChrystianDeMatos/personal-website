import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Button, Typography } from '@material-ui/core';

import { Link as LinkScroll, animateScroll } from "react-scroll";

import {
  // NavLink,
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
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          exact to="/"
        >
          Chrystian de Matos
        </Typography>
        {/* <Button
          className={classes.navLink}
          component={NavLink}
          to="/sobre"
        >
          Sobre
        </Button>
        <Button
          className={classes.navLink}
          component={NavLink}
          to="/portfolio"
        >
          Portfólio
        </Button> */}
        <Button
          className={classes.navLink}
          component={LinkScroll}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Sobre
        </Button>
        <Button
          className={classes.navLink}
          component={LinkScroll}
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Portfólio
        </Button>

      </Toolbar>
    </AppBar>
  )
}
