import React from "react";

import { IconButton, Typography } from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.logoDiv}>
        <Typography className={classes.footerLogo}>Blomster</Typography>
        <Typography className={classes.footerLogo}>Werket</Typography>
      </div>

      <div className={classes.logoDiv}>
        <ul className={classes.footerList}>
          <li className={classes.li}>
            <a className={classes.footerText} href="./">
              Contact
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.footerText} href="./">
              +47 000 00 00
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.footerText} href="./">
              info@bw.com
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.logoDiv}>
        <Typography className={classes.footerText}>Follow Us</Typography>
        <div className={classes.socialButtonsFooter}>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.facebook.com/pg/Blomster-Werket-103013615165959/posts/"
              )
            }
          >
            <Facebook style={{ fill: "#F8F8F9" }} />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.instagram.com/blomsterwerket/")
            }
          >
            <Instagram style={{ fill: "#F8F8F9" }} />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
