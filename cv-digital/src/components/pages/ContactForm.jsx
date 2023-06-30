import { TextField, Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import NavbarComponent from "../NavbarComponent";
import classes from "./ContactForm.module.css";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [motive, setMotive] = useState("");
  const [color, setColor] = useState(null);
  const [content, setContent] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setContent(null);
      const response = await fetch("http://localhost:8000/api/contactos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: {
            nombre: name,
            email: email,
            descripcion: motive,
            telefono: phone,
          },
        }),
      });
      const { message } = await response.json();
      setContent(message);
      if (response.status === 201) {
        setColor("green");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setColor("red");
      }
    } catch (err) {
      setColor("red");
      setContent("Server Error");
    }
  };
  return (
    <>
      <NavbarComponent></NavbarComponent>

      <Box className={classes.container}>
        <form className={`${classes.form}`} onSubmit={submitForm}>
          <TextField
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            className={classes.input}
          />
          <TextField
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            className={classes.input}
          />
          <TextField
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            id="telefono"
            label="Teléfono"
            variant="outlined"
            type="phone"
            fullWidth
            className={classes.input}
          />
          <TextField
            name="motive"
            value={motive}
            onChange={(e) => setMotive(e.target.value)}
            required
            id="message"
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            className={classes.input}
          />
          {content && <Typography color={color}>{content}</Typography>}
          <Button
            variant="contained"
            color="primary"
            type="submit"
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
