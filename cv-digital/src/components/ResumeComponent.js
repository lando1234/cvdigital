import React, { memo } from "react";
import PropTypes from "prop-types";
import { Divider, Grid } from "@mui/material";
import ExperienceComponent from "./ExperienceComponent";
import LanguagesComponent from "./LanguagesComponent";
import PersonalDataComponent from "./PersonalDataComponent";
import AboutComponent from "./AboutComponent";
import CustomListComponent from "./CustomListComponent";
import classes from "./ResumeComponent.module.css";

const ResumeComponent = memo(({ data }) => {
  const {
    personalData,
    about,
    languages,
    strengths,
    certs,
    experience,
    education,
  } = data;

  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={12} className={classes.personal}>
        <Grid container pr={4} spacing={4} pt={2}>
          <Grid item md={12} sm={6}>
            <img
              src={process.env.PUBLIC_URL + "/foto-cv.jpg"}
              alt="Foto CV"
              className={classes.img}
            />
          </Grid>
          <Grid item md={12} sm={6}>
            <PersonalDataComponent data={personalData} />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <AboutComponent about={about} />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <LanguagesComponent languages={languages} />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <CustomListComponent title="Fortalezas" list={strengths} />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <CustomListComponent title="Certificaciones" list={certs} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} xs={12} className={classes.experience}>
        <ExperienceComponent
          title="Experiencia Laboral"
          experience={experience}
        />
        <ExperienceComponent title="Estudios" experience={education} />
      </Grid>
    </Grid>
  );
});

export default ResumeComponent;
