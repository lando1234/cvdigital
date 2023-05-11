import { TextField, Button, Box } from "@mui/material";
import React from "react";
import NavbarComponent from "../NavbarComponent";
import classes from "./ContactForm.module.css";

function ContactForm() {
  return (
    <>
      <NavbarComponent></NavbarComponent>

      <Box className={classes.container}>
        <form className={`${classes.form}`}>
          <TextField
            required
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            className={classes.input}
          />
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            className={classes.input}
          />
          <TextField
            required
            id="message"
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            className={classes.input}
          />
          <Button
            variant="contained"
            color="primary"
            className={`${classes.button}`}
            fullWidth
            sx={{ background: "#009688" }}
          >
            Contactar
          </Button>
        </form>
      </Box>
    </>
  );
}

export default ContactForm;
