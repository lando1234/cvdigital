import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Grid, Typography } from "@mui/material";
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
    <>
      <Typography variant={"h5"}>Lenguajes</Typography>

      {props.languages.map((language) => (
        <Grid container className="language-container" key={language.name}>
          <Grid item xs={6} className="language" key={language.name}>
            <Typography variant={"h6"}>{language.name}</Typography>
          </Grid>
          <Grid item xs={6} className="skill" key={language.name}>
            <Typography variant={"h6"}> {getStars(language.level)} </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default LanguagesComponent;
