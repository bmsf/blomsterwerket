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
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/"
              aria-label="Show cart items"
              color="inherit"
            >
              <Menu />
            </IconButton>
          </div>
          <div className={classes.grow} />
          <img
            src={logo}
            alt="Commerce.js"
            height="40px"
            className={classes.image}
          />
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
