import React from "react";
import NavbarComponent from "../NavbarComponent";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import classes from "./ContactList.module.css";
const contacts = [
  {
    id: 1,
    nombre: "John Doe",
    email: "john.doe@example.com",
    motivo: "Question",
  },
  {
    id: 2,
    nombre: "Jane Doe",
    email: "jane.doe@example.com",
    motivo: "Feedback",
  },
  {
    id: 3,
    nombre: "Bob Smith",
    email: "bob.smith@example.com",
    motivo: "Complaint",
  },
];

const columns = [
  { field: "nombre", headerName: "Nombre", width: 200 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "motivo", headerName: "Motivo", width: 500 },
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

const ContactList = () => {
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