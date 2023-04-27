import "./App.css";

import { Container } from "@mui/material";
import data from "./data/resume-data.json";
import ResumeComponent from "./components/ResumeComponent";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <ResumeComponent data={data}></ResumeComponent>
      </Container>
    </>
  );
}

export default App;
