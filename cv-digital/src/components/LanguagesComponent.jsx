import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Grid, Typography } from "@mui/material";
import classes from "./LanguagesComponent.module.css";
const LanguagesComponent = (props) => {
  const getStars = (skill) => {
    const empty = 5 - skill;
    const fullStar = <StarIcon></StarIcon>;
    const emptyStar = <StarBorderIcon></StarBorderIcon>;
    const resultArray = [];
    for (let i = 0; i < skill; i++) {
      resultArray.push(fullStar);
    }
    for (let i = 0; i < empty; i++) {
      resultArray.push(emptyStar);
    }
    return resultArray;
  };

  return (
    <Box pt={2} pb={2}>
      <Typography className={classes.title}>Lenguajes</Typography>

      {props.languages.map((language, index) => (
        <Grid container className={classes["language-container"]} key={index}>
          <Grid item xs={6}>
            <Typography className={classes.content}>{language.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.content}>
              {getStars(language.level)}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default LanguagesComponent;
