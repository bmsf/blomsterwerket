import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Typography,
} from "@material-ui/core";
import {
  ShoppingCart,
  Menu,
  Search,
  Facebook,
  Instagram,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

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
              aria-label="Menu button"
              color="inherit"
            >
              <Menu className={classes.menuButton} />
              <Facebook className={classes.socialButton} />
              <Instagram className={classes.socialButton} />
            </IconButton>
          </div>
          <div className={classes.grow} />
          <Typography className={classes.title}>Blomster werket</Typography>
          <nav className={classes.desktopNav}>
            <ul className={classes.navLinks}>
              <li>
                <a href="#" className={classes.aTags}></a>Home
              </li>
              <li>
                <a href="#"></a>Shop
              </li>
              <li>
                <a href="#"></a>New
              </li>
              <li>
                <a href="#"></a>About
              </li>
            </ul>
          </nav>
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/"
              aria-label="Search button"
              color="inherit"
            >
              <Search className={classes.searchBar} />
            </IconButton>
          </div>
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
