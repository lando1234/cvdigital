import React from "react";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import classes from "./ExperiencePart.module.css";

const ExperiencePart = (props) => {
  return (
    <>
      <Grid item xs={12} align={"left"} p={2} pb={0}>
        <Typography className={classes.time} variant={"overline"}>
          {props.experience.year}
        </Typography>
      </Grid>
      <Grid item md={6} xs={12} align={"left"} p={2}>
        <Typography className={classes.name} variant={"h5"}>
          {props.experience.title} - {props.experience.institution}
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        align={"right"}
        className={classes.location}
        p={2}
      >
        <Typography className={classes.location} variant={"overline"}>
          {props.experience.location}
        </Typography>
      </Grid>
      {props.experience.description ? (
        <Grid item xs={12} p={2}>
          <Typography
            align={"left"}
            className={classes.description}
            variant={"body1"}
          >
            {props.experience.description}
          </Typography>
        </Grid>
      ) : (
        <></>
      )}
      <Grid item xs={12} p={2}>
        <Divider></Divider>
      </Grid>
    </>
  );
};

export default ExperiencePart;
