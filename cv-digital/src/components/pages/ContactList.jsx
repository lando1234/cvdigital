import React, { useEffect, useState } from "react";
import NavbarComponent from "../NavbarComponent";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import classes from "./ContactList.module.css";

const columns = [
  { field: "nombre", headerName: "Nombre", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "telefono", headerName: "Teléfono", width: 200 },
  { field: "motivo", headerName: "Motivo", width: 300 },
  {
    field: "contacto",
    headerName: "Contacto",
    width: 200,
    renderCell: (params) => (
      <Button variant="outlined" color="primary">
        Contactar
      </Button>
    ),
  },
];

const getContacts = async () => {
  const response = await fetch("http://localhost:8000/api/contactos");
  const contactList = await response.json();

  return contactList.map((el, index) => {
    return {
      id: index + 1,
      nombre: el.nombre,
      email: el.email,
      motivo: el.descripcion,
      telefono: el.telefono,
    };
  });
};

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts().then((res) => {
      setContacts(res);
    });
  }, []);

  return (
    <>
      <NavbarComponent></NavbarComponent>;
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={contacts} columns={columns} className={classes.tabla} />
      </div>
    </>
  );
};

export default ContactList;