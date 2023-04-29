import React from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import ExperienceComponent from "./ExperienceComponent";
import classes from "./ResumeComponent.module.css";
import LanguagesComponent from "./LanguagesComponent";
import PersonalDataComponent from "./PersonalDataComponent";

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
        <Typography variant={"h5"}>Acerca de mí</Typography>
        <Typography variant={"h6"}>{props.data.about}</Typography>
        <Divider></Divider>
        <Typography variant={"h5"}>Lenguajes</Typography>
        <LanguagesComponent
          languages={props.data.languages}
        ></LanguagesComponent>
        <Divider></Divider>
        <Typography variant={"h5"}>Fortalezas</Typography>
        <List>
          {props.data.strengths.map((strength) => (
            <ListItem key={strength} disableGutters>
              <Typography variant={"h6"}>{strength}</Typography>
            </ListItem>
          ))}
        </List>
        <Divider></Divider>
        <Typography variant={"h5"}>Certificaciones</Typography>
        <List>
          {props.data.certs.map((certs) => (
            <ListItem key={certs} disableGutters>
              <Typography variant={"h6"}>{certs}</Typography>
            </ListItem>
          ))}
        </List>
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
