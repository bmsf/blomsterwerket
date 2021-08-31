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
  LocalMallSharp,
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
              <Facebook
                className={classes.socialButton}
                target="_blank"
                href="https://www.facebook.com/pages/category/Florist/Blomster-Werket-103013615165959/"
              />
            </IconButton>
            <IconButton aria-label="Instagram button">
              <Instagram
                className={classes.socialButton}
                target="_blank"
                href="https://www.instagram.com/blomsterwerket/s"
              />
            </IconButton>
          </div>
          <div className={classes.grow} />
          <Typography className={classes.title}>Blomster werket</Typography>
          <nav className={classes.desktopNav}>
            <ul className={classes.navLinks}>
              <li>
                <Link to="/" className={classes.aTags}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className={classes.aTags}>
                  Nettbutikk
                </Link>
              </li>
              <li>
                <Link to="/nyheter" className={classes.aTags}>
                  Blomsterbinderi
                </Link>
              </li>
              <li>
                <Link to="/svar" className={classes.aTags}>
                  Ofte stilte spørsmål
                </Link>
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

          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <LocalMallSharp />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
