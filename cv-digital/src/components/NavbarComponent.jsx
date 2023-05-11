import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import classes from "./NavbarComponent.module.css";

const navItems = [];

const NavbarComponent = () => {
  return (
    <AppBar component="nav" position="sticky" style={{ background: "#00796B" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
        ></IconButton>
        <Typography
          variant="h6"
          component="div"
          className={classes.logo}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          ML
        </Typography>
        <Box className={classes.gbcontainer}>
          <NavLink
            to="/contacto"
            className={classes["link-button"]}
            activeClassName={classes.active}
          >
            Contacto
          </NavLink>
          <NavLink
            to="/resume"
            className={classes["link-button"]}
            activeClassName={classes.active}
          >
            Curriculum
          </NavLink>
        </Box>
        <Box className={classes.logincontainer}>
          <NavLink
            to="/login"
            className={classes["link-button"]}
            activeClassName={classes.active}
          >
            Acceso
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
