import React from "react";
import { Box, Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import classes from "./CommonLayout.module.css";
const CustomListComponent = (props) => {
  return (
    <Box pt={2} pb={2}>
      <Typography className={classes.title}>{props.title}</Typography>
      <List pt={0}>
        {props.list.map((item) => (
          <ListItem key={item} disableGutters>
            <Typography className={classes.content}>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

CustomListComponent.propTypes = {};

export default CustomListComponent;
