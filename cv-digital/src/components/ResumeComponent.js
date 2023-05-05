import React from "react";
import { Divider, Grid } from "@mui/material";
import ExperienceComponent from "./ExperienceComponent";
import classes from "./ResumeComponent.module.css";
import LanguagesComponent from "./LanguagesComponent";
import PersonalDataComponent from "./PersonalDataComponent";
import AboutComponent from "./AboutComponent";
import CustomListComponent from "./CustomListComponent";

const ResumeComponent = (props) => {
  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={12} className={classes.personal} pl={0}>
        <img src="/foto-cv.jpg" alt="Foto CV" className={classes.img} />
        <Divider></Divider>
        <PersonalDataComponent
          data={props.data.personalData}
        ></PersonalDataComponent>
        <Divider></Divider>
        <AboutComponent about={props.data.about}></AboutComponent>
        <Divider></Divider>
        <LanguagesComponent
          languages={props.data.languages}
        ></LanguagesComponent>
        <Divider></Divider>
        <CustomListComponent
          title={"Fortalezas"}
          list={props.data.strengths}
        ></CustomListComponent>
        <Divider></Divider>
        <CustomListComponent
          title={"Certificaciones"}
          list={props.data.certs}
        ></CustomListComponent>
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
