import logo from "./logo.svg";
import "./App.css";
import ExperienceComponent from "./components/ExperienceComponent";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={3} xs={12}>
            info personal
          </Grid>
          <Grid item md={9} xs={12}>
            <Container>
              <ExperienceComponent></ExperienceComponent>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
