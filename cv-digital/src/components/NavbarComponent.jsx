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
  const [registered, setRegistered] = useState(true);

  const checkStatus = async () => {
    const registeredResponse = await fetch(
      "http://localhost:8000/api/usuarios/"
    );
    const areUsers = await registeredResponse.json();

    if (areUsers.length > 0) {
      const logged = sessionStorage.getItem("token");
      setloggedIn(logged);
      setRegistered(true);
    } else {
      setRegistered(false);
    }
  };

  useEffect(() => {
    checkStatus();
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
          {registered ? (
            <NavLink to="/contacto" className={classes["link-button"]}>
              Contacto
            </NavLink>
          ) : (
            <></>
          )}
        </Box>
        <Box className={classes.logincontainer}>
          {registered ? (
            loggedIn ? (
              <NavLink to="/listaContacto" className={classes["link-button"]}>
                Ver lista de contactos
              </NavLink>
            ) : (
              <NavLink to="/login" className={classes["link-button"]}>
                Acceso
              </NavLink>
            )
          ) : (
            <NavLink to="/registrar" className={classes["link-button"]}>
              Registrarse
            </NavLink>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
