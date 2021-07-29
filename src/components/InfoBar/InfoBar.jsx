import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, Menu } from "@material-ui/icons";

import useStyles from "./styles";

const InfoBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <div className={classes.button}>
            <IconButton
              
              to="/"
              aria-label="Show cart items"
              color="inherit"
            >
              <Menu />
            </IconButton>
          </div>
          <div className={classes.grow} />

          <div className={classes.grow} />
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default InfoBar;
