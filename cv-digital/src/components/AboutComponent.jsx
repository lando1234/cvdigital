import React from "react";
import { Typography, Box } from "@mui/material";
import classes from "./CommonLayout.module.css";

const AboutComponent = (props) => {
  return (
    <Box className={classes.container} pt={2} pb={2}>
      <Typography className={classes.title}>Acerca de mí</Typography>
      <Typography className={classes.content}>{props.about}</Typography>
    </Box>
  );
};

export default AboutComponent;
