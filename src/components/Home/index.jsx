import React from "react";
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  ArrowRightAlt,
  Twitter,
} from "@material-ui/icons";

import { Input } from "antd";

import wedding from "../../assets/wedding.jpeg";

import bestseller2 from "../../assets/bestseller2.png";
import bestseller3 from "../../assets/bestseller3.png";
import utsidebutikk from "../../assets/roundedstore.png";
import rounded from "../../assets/roundedbig.png";

import "../../index.css";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <div className={classes.frontPageDiv}>
        <div className={classes.socialButtons}>
          <IconButton
            component={Link}
            to="/"
            aria-label="Menu button"
            color="inherit"
          >
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
        <div className={classes.root} />
        <img
          src={rounded}
          className={classes.roundedImgFrontpage}
          alt="Bilde av blomster"
        />
        <div className={classes.root} />
        <div className={classes.textDivFrontpage}>
          <div>
            <Typography className={classes.headerFrontpageTop} variant="h1">
              Blomster
            </Typography>
            <Typography className={classes.headerFrontpage} variant="h1">
              Werket
            </Typography>
            <div>
              <Link className={classes.shopNow} to="/shop">
                <IconButton>
                  <Typography variant="h6" className={classes.shopNowText}>
                    Handle nå
                  </Typography>

                  <ArrowRightAlt />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.aboutUsSection}>
        <div className={classes.aboutUsTextContainer}>
          <Typography className={classes.aboutUsHeader}>About us</Typography>
          <Typography className={classes.aboutParagraph}>
            We pride ourselves on sourcing on-trend flowers and creating
            one-of-a-kind arrangements you wont`t find anywhere else. We work
            with the best-in-class designers to offer stunning bouquets and
            curated plants that fit every occasion. We make it a priority to
            work directly with our farms and invest in the people who work
            there. We believe our hands-on approach is the best way to guarantee
            only the freshest flowers are picked every day.
          </Typography>
        </div>
        <img
          src={utsidebutikk}
          className={classes.utsidebutikk}
          alt="Bilde av butikken utvendig"
        />
      </div>
      <div className={classes.bestSellerSection}>
        <Typography className={classes.aboutUsHeader}>Best sellers</Typography>
        <Grid container className={classes.gridContainer} spacing={3}>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Card className={classes.root} elevation="0">
              <CardMedia className={classes.media} image={wedding} />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.bodyText}>
                  Dusky Dreams
                </Typography>
                <Typography className={classes.bodyText}>$35</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Card className={classes.root} elevation="0">
              <CardMedia className={classes.media} image={bestseller2} />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.bodyText}>
                  Summer Skies
                </Typography>
                <Typography className={classes.bodyText}>35$</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Card className={classes.root} elevation="0">
              <CardMedia className={classes.media} image={bestseller3} />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.bodyText}>
                  Sweet Embrace
                </Typography>
                <Typography className={classes.bodyText}>$35</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Link className={classes.shopNowBestSellers} to="/shop">
          <IconButton>
            <Typography
              variant="h6"
              className={classes.shopNowText}
              style={{ fontSize: "12px" }}
            >
              Handle nå
            </Typography>

            <ArrowRightAlt />
          </IconButton>
        </Link>
      </div>
      <div className={classes.sub}>
        <Typography className={classes.aboutUsHeader}>Subscriptions</Typography>
        <Typography className={classes.category}>Classic</Typography>
        <Typography className={classes.deliveryPrize}>
          35$ per delivery
        </Typography>

        {/* <div className={classes.subContainer}>
          <div
            className={classes.shopNow}
            style={{ position: "relative", right: "20%", bottom: "20%" }}
          >
            <Typography
              variant="h6"
              className={classes.shopNowText}
              style={{ fontSize: "12px" }}
            >
              Handle nå
            </Typography>
            <a class="link" href="#">
              <IconButton>
                <ArrowRightAlt />
              </IconButton>
            </a>
          </div>
          <div>
            <Typography className={classes.aboutParagraph}>
              A selection of timeless bouquets that are fit for any occasion.
              The first delivery includes a glass vase, making it even easier
              for your recipient to showcase their gift{" "}
            </Typography>
          </div>
          <div
            className={classes.shopNow}
            style={{ position: "relative", right: "20%", bottom: "20%" }}
          >
            <Typography
              variant="h6"
              className={classes.shopNowText}
              style={{ fontSize: "12px" }}
            >
              Handle nå
            </Typography>
            <a class="link" href="#">
              <IconButton>
                <ArrowRightAlt />
              </IconButton>
            </a>
          </div>
        </div> */}
      </div>
      {/* <div style={{ height: "200px", display: "flex" }}>
        <Carousel
          autoplay
          style={{ backgroundColor: "white", height: "200px" }}
        >
          <div>
            <div className={classes.contentStyle}>1</div>
          </div>
          <div>
            <h3 className={classes.contentStyle}>2</h3>
          </div>
          <div>
            <h3 className={classes.contentStyle}>3</h3>
          </div>
          <div>
            <h3 className={classes.contentStyle}>4</h3>
          </div>
        </Carousel>
      </div> */}

      <div className={classes.newsletter}>
        <div className={classes.textDiv}>
          <Typography
            className={classes.aboutUsHeader}
            style={{ fontSize: "4vw" }}
          >
            Let´s keep in touch!
          </Typography>
          <Typography className={classes.aboutParagraph}>
            People connect through the values and ideas. Bring extra value to
            those who would like to stay connected. Build up a community of fans
            and people who would like to stay connected. Build up a community of
            fans and people who resonate with your brand
          </Typography>
        </div>
        <div className={classes.inputDiv}>
          <div style={{ paddingBottom: "20px" }}>
            <Input placeholder="Name" size="large" className={classes.input} />
          </div>
          <div style={{ paddingBottom: "20px" }}>
            <Input placeholder="Email" size="small" className={classes.input} />
          </div>
          <Button
            color="primary"
            variant="contained"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </div>
      </div>

      <footer className={classes.footer}>
        <div className={classes.logoDiv}>
          <Typography className={classes.footerLogo}>Blomster</Typography>
          <Typography className={classes.footerLogo}>Werket</Typography>
        </div>
        <div className={classes.logoDiv}>
          <ul className={classes.footerList}>
            <li>
              <a className={classes.footerText} href="./">
                About Us
              </a>
            </li>
            <li>
              <a className={classes.footerText} href="./">
                Sale
              </a>
            </li>
            <li>
              <a className={classes.footerText} href="./">
                Delivery & Payment
              </a>
            </li>
          </ul>
        </div>

        <div className={classes.logoDiv}>
          <ul className={classes.footerList}>
            <li>
              <a className={classes.footerText} href="./">
                Blog
              </a>
            </li>
            <li>
              <a className={classes.footerText} href="./">
                FAQ
              </a>
            </li>
            <li>
              <a className={classes.footerText} href="./">
                Subscriptions
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.logoDiv}>
          <ul className={classes.footerList}>
            <li>
              <a className={classes.footerText} href="./">
                Contact
              </a>
            </li>
            <li>
              <a className={classes.footerText} href="./">
                +47 000 00 00
              </a>
            </li>
            <li>
              <a className={classes.footerText} href="./">
                info@bw.com
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.logoDiv}>
          <Typography className={classes.footerText}>Follow Us</Typography>
          <div className={classes.socialButtonsFooter}>
            <IconButton>
              <Facebook style={{ fill: "#F8F8F9" }} />
            </IconButton>
            <IconButton>
              <Instagram style={{ fill: "#F8F8F9" }} />
            </IconButton>
            <IconButton>
              <Twitter style={{ fill: "#F8F8F9" }} />
            </IconButton>
          </div>
        </div>
      </footer>
    </main>
  );
};
export default Home;
