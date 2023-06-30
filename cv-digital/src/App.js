import "./App.css";

import { Container } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumeComponent from "./components/pages/ResumeComponent";
import LoginComponent from "./components/pages/LoginComponent";
import ContactForm from "./components/pages/ContactForm";
import ContactList from "./components/pages/ContactList";

const router = createBrowserRouter([
  { path: "/", element: <ResumeComponent /> },
  { path: "resume", element: <ResumeComponent /> },
  { path: "login", element: <LoginComponent /> },
  { path: "contacto", element: <ContactForm /> },
  { path: "listaContacto", element: <ContactList /> },
]);

function App() {
  return (
    <>
      <Container maxWidth="lg" className="container">
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;