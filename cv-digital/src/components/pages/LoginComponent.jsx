import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavbarComponent from "../NavbarComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("token");
    if (loggedIn) {
      navigate("/listaContacto");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    setError(null);
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/usuarios/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password: pass,
      }),
    });
    const loginResponse = await response.json();
    if (response.status === 200) {
      sessionStorage.setItem("token", loginResponse.token);
      navigate("/listaContacto");
    } else {
      setError("Error al autenticarse");
    }
  };

  return (
    <>
      <NavbarComponent></NavbarComponent>;
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#009688" }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        {error && <Typography color="red">{error}</Typography>}
      </Container>
    </>
  );
}