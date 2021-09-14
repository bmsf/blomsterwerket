import React from "react";
// import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { LocalMallOutlined, Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  // const location = useLocation();
  // const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolBar}>
          <IconButton>
            <Menu className={classes.menuButton} />
          </IconButton>

          <div className={classes.logoDivMobile}>
            <Typography
              variant="h4"
              style={{
                fontFamily: "Roseritta",
                fontWeight: "bold",
                margin: "0",
                padding: "0",
              }}
            >
              B
            </Typography>
            <Typography
              variant="h4"
              style={{
                fontFamily: "Roseritta",
                fontWeight: "bold",
                position: "relative",
                top: "8px",
              }}
            >
              W
            </Typography>
          </div>
          <nav className={classes.desktopNav}>
            <ul className={classes.navLinks}>
              <li>
                <Link to="/" className={classes.aTags}>
                  Hjem
                </Link>
              </li>
              <li>
                <Link to="/shop" className={classes.aTags}>
                  Butikk
                </Link>
              </li>

              {/* <img src={logogreen} className={classes.logo} /> */}
              <div className={classes.logoDiv}>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Roseritta",
                    fontWeight: "bold",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  B
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Roseritta",
                    fontWeight: "bold",
                    paddingTop: "10px",
                  }}
                >
                  W
                </Typography>
              </div>

              <li>
                <Link to="/anledninger" className={classes.aTags}>
                  Anledninger
                </Link>
              </li>
              <li>
                <Link to="/svar" className={classes.aTags}>
                  Spørsmål
                </Link>
              </li>
            </ul>
          </nav>
          <div className={classes.cartButton}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="primary">
                <LocalMallOutlined />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
