import React, { useEffect, useState } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import classes from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  const [loggedIn, setloggedIn] = useState(null);
  useEffect(() => {
    const logged = sessionStorage.getItem("token");
    setloggedIn(logged);
  }, []);
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
          <NavLink to="/resume" className={classes.linklogo}>
            MLC
          </NavLink>
        </Typography>
        <Box className={classes.gbcontainer}>
          <NavLink to="/resume" className={classes["link-button"]}>
            Curriculum
          </NavLink>
          <NavLink to="/contacto" className={classes["link-button"]}>
            Contacto
          </NavLink>
        </Box>
        <Box className={classes.logincontainer}>
          {loggedIn ? (
            <NavLink to="/listaContacto" className={classes["link-button"]}>
              Ver lista de contactos
            </NavLink>
          ) : (
            <NavLink to="/login" className={classes["link-button"]}>
              Acceso
            </NavLink>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
