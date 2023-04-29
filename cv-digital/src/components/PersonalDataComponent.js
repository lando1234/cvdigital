import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

const PersonalDataComponent = (props) => {
  return (
    <>
      <div className="pd-container">
        <PersonIcon></PersonIcon> {props.data.name}
      </div>
      <div className="pd-container">
        <AlternateEmailIcon></AlternateEmailIcon>
        {props.data.email}
      </div>
      <div className="pd-container">
        <LocalPhoneIcon></LocalPhoneIcon>
        {props.data.phone}
      </div>
      <div className="pd-container">
        <LocationOnIcon></LocationOnIcon>
        {props.data.location}
      </div>
      <div className="pd-container">
        <LinkedInIcon></LinkedInIcon> <Link>{props.data.linkedin}</Link>
      </div>
    </>
  );
};

export default PersonalDataComponent;
