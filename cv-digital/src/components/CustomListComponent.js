import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";

const CustomListComponent = (props) => {
  return (
    <>
      <Typography variant={"h5"}>{props.title}</Typography>
      <List>
        {props.list.map((item) => (
          <ListItem key={item} disableGutters>
            <Typography variant={"h6"}>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

CustomListComponent.propTypes = {};

export default CustomListComponent;
