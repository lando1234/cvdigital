import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Link, Typography } from "@mui/material";
import classes from "./PersonalDataComponent.module.css";

const PersonalDataComponent = (props) => {
  return (
    <Box pt={2} pb={2}>
      <div className={`${classes.name} ${classes.data}`}>
        <PersonIcon className={classes.icon}></PersonIcon>{" "}
        <Typography>{props.data.name}</Typography>
      </div>
      <div className={`${classes.email} ${classes.data}`}>
        <AlternateEmailIcon className={classes.icon}></AlternateEmailIcon>
        <Typography>{props.data.email}</Typography>
      </div>
      <div className={`${classes.phone} ${classes.data}`}>
        <LocalPhoneIcon className={classes.icon}></LocalPhoneIcon>
        <Typography>{props.data.phone}</Typography>
      </div>
      <div className={`${classes.location} ${classes.data}`}>
        <LocationOnIcon className={classes.icon}></LocationOnIcon>
        <Typography>{props.data.location}</Typography>
      </div>
      <div className={`${classes.linkedin} ${classes.data}`}>
        <LinkedInIcon className={classes.icon}></LinkedInIcon>{" "}
        <Link href={props.data.linkedin} target="_blank">
          Perfil
        </Link>
      </div>
    </Box>
  );
};

export default PersonalDataComponent;
