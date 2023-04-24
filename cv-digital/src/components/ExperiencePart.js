import React from "react";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import classes from "./ExperiencePart.module.css";

const ExperiencePart = () => {
  return (
    <Grid
      container
      spacing={2}
      className={classes["part-container"]}
      p={2}
      pr={4}
    >
      <Grid item xs={12} align={"left"}>
        <Typography className={classes.time} variant={"overline"}>
          Octubre 2021 - Diciembre 2022
        </Typography>
      </Grid>
      <Grid item md={6} xs={12} align={"left"}>
        <Typography className={classes.name} variant={"h5"}>
          Software Engineer
        </Typography>
      </Grid>
      <Grid item md={6} xs={12} align={"right"}>
        <Typography className={classes.location} variant={"overline"}>
          Buenos Aires, Argentina
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider></Divider>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={"left"}
          className={classes.description}
          variant={"body1"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          explicabo quia. Dolore recusandae maxime, eveniet aspernatur quidem
          vero, minus ipsa harum, culpa repellendus corporis corrupti minima
          unde hic animi laudantium.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ExperiencePart;
