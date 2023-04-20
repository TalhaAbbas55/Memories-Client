import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import useStyles from "./styles";
import memories from "../../Images/memories.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} height="60" />
      </AppBar>
    </div>
  );
};

export default Navbar;
