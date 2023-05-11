import React from "react";
import NavbarComponent from "../NavbarComponent";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const contacts = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    reason: "Question",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    reason: "Feedback",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    reason: "Complaint",
  },
];

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "reason", headerName: "Reason", width: 200 },
  {
    field: "contact",
    headerName: "Contact",
    width: 200,
    renderCell: (params) => (
      <Button variant="contained" color="primary">
        Contact
      </Button>
    ),
  },
];

const ContactList = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>;
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={contacts} columns={columns} />
      </div>
    </>
  );
};

export default ContactList;
