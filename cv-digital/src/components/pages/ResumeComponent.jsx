import React, { memo } from "react";
import { Grid } from "@mui/material";
import ExperienceComponent from "../ExperienceComponent";
import LanguagesComponent from "../LanguagesComponent";
import PersonalDataComponent from "../PersonalDataComponent";
import AboutComponent from "../AboutComponent";
import CustomListComponent from "../CustomListComponent";
import classes from "./ResumeComponent.module.css";
import data from "../../data/resume-data.json";
import NavbarComponent from "../NavbarComponent";

const ResumeComponent = memo(() => {
  return (
    <>
      <NavbarComponent></NavbarComponent>

      <Grid container>
        <Grid item md={4} xs={12} className={classes.personal} p={2}>
          <Grid container>
            <Grid item md={12} sm={6} p={1}>
              <img
                src={process.env.PUBLIC_URL + "/foto-cv.jpg"}
                alt="Foto CV"
                className={classes.img}
              />
            </Grid>
            <Grid item md={12} sm={6} p={1}>
              <PersonalDataComponent data={data.personalData} />
            </Grid>
            <Grid item xs={12} sm={6} md={12} p={1}>
              <AboutComponent about={data.about} />
            </Grid>
            <Grid item xs={12} sm={6} md={12} p={1}>
              <LanguagesComponent languages={data.languages} />
            </Grid>
            <Grid item xs={12} sm={6} md={12} p={1}>
              <CustomListComponent title="Fortalezas" list={data.strengths} />
            </Grid>
            <Grid item xs={12} sm={6} md={12} p={1}>
              <CustomListComponent title="Certificaciones" list={data.certs} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} xs={12} className={classes.experience}>
          <ExperienceComponent
            title="Experiencia Laboral"
            experience={data.experience}
          />
          <ExperienceComponent title="Estudios" experience={data.education} />
        </Grid>
      </Grid>
    </>
  );
});

export default ResumeComponent;