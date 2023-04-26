import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ExperiencePart from "./ExperiencePart";
import classes from "./ExperienceComponent.module.css";

const ExperienceComponent = (props) => {
  return (
    <Grid
      container
      className={classes["experience-container"]}
      spacing={2}
      pr={4}
      pl={2}
    >
      <Grid item xs={12} mb={1}>
        <Typography className={classes.title} align={"left"} variant={"h4"}>
          {props.title}
        </Typography>
      </Grid>
      {props.experience.map((el) => (
        <ExperiencePart experience={el}></ExperiencePart>
      ))}
    </Grid>
  );
};

export default ExperienceComponent;
