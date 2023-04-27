import React from "react";
import { Grid } from "@mui/material";
import ExperienceComponent from "./ExperienceComponent";
import classes from "./ResumeComponent.module.css";

const ResumeComponent = (props) => {
  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={12} className={classes.personal}>
        <img src="/foto-cv.jpg" alt="Foto CV" className={classes.img} />
      </Grid>
      <Grid item md={8} xs={12} className={classes.experience}>
        <ExperienceComponent
          title={"Experiencia Laboral"}
          experience={props.data.experience}
        ></ExperienceComponent>
        <ExperienceComponent
          title={"Estudios"}
          experience={props.data.education}
        ></ExperienceComponent>
      </Grid>
    </Grid>
  );
};

export default ResumeComponent;
