import React from "react";
import { Typography } from "@mui/material";

const AboutComponent = (props) => {
  return (
    <>
      <Typography variant={"h5"}>Acerca de mí</Typography>
      <Typography variant={"h6"}>{props.about}</Typography>
    </>
  );
};

export default AboutComponent;
