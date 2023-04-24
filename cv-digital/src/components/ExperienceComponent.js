import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ExperiencePart from "./ExperiencePart";

const ExperienceComponent = () => {
  return (
    <Grid container>
      <Grid item xs={12} mb={4}>
        <Typography className="title" align={"left"}>
          Titulo Sección
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ExperiencePart></ExperiencePart>
      </Grid>
    </Grid>
  );
};

export default ExperienceComponent;
