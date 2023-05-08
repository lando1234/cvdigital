import { makeStyles, TextField, Button } from "@mui/material";
import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <form className={`${styles.form}`}>
      <TextField required id="name" label="Name" variant="outlined" />
      <TextField
        required
        id="email"
        label="Email"
        variant="outlined"
        type="email"
      />
      <TextField
        required
        id="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        color="primary"
        className={`${styles.button}`}
      >
        Send
      </Button>
    </form>
  );
}

export default ContactForm;
