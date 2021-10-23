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
import { Facebook, Instagram, ArrowRightAlt } from "@material-ui/icons";

import { Input } from "antd";

import wedding from "../../assets/wedding.jpeg";

import bestseller2 from "../../assets/bestseller2.png";
import bestseller3 from "../../assets/bestseller3.png";
import rounded from "../../assets/roundedbig.png";
import omoss2 from "../../assets/omoss.jpeg";
import interiør from "../../assets/interiør.jpeg";
import delt from "../../assets/mainpage768px.jpg";
import delt2 from "../../assets/mainpage.jpeg";
import delt3 from "../../assets/darkblue.jpg";

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
            aria-label="Menu button"
            color="inherit"
            onClick={() =>
              window.open(
                "https://www.facebook.com/pg/Blomster-Werket-103013615165959/posts/"
              )
            }
          >
            <Facebook className={classes.socialButton} />
          </IconButton>
          <IconButton
            aria-label="Instagram button"
            onClick={() =>
              window.open("https://www.instagram.com/blomsterwerket/")
            }
          >
            <Instagram className={classes.socialButton} />
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
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/shop" class="arrow">
                <Typography variant="h6" className={classes.shopNowText}>
                  Handle nå
                  <ArrowRightAlt style={{ paddingTop: "10px" }} />
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.aboutUsSection}
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className={classes.aboutUsTextContainer}>
          <Typography
            className={classes.aboutUsHeader}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Om oss
          </Typography>
          <Typography
            className={classes.aboutParagraph}
            data-aos="fade-up"
            data-aos-delay="1000"
          >
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
          src={omoss2}
          className={classes.utsidebutikk}
          alt="Bilde av butikken utvendig"
          data-aos="fade-left"
          data-aos-delay="800"
        />
      </div>
      <div className={classes.bestSellerSection}>
        <Typography
          className={classes.aboutUsHeader}
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Best sellers
        </Typography>
        <Grid container className={classes.gridContainer} spacing={3}>
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={4}
            data-aos="fade-up"
            data-aos-delay="1000"
          >
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
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={4}
            data-aos="fade-up"
            data-aos-delay="1500"
          >
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
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={4}
            data-aos="fade-up"
            data-aos-delay="2000"
          >
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

      <div className={classes.sub} data-aos="fade-up" data-aos-delay="800">
        <Typography className={classes.aboutUsHeader} variant="h3">
          Abonner på blomster
        </Typography>
        <Typography className={classes.category}>Klassisk blomst</Typography>
        <Typography className={classes.deliveryPrize}>
          35$ per delivery
        </Typography>
        <Button
          variant="contained"
          style={{ height: "40px" }}
          color="primary"
          component={Link}
          to="/checkout"
        >
          Velg denne planen
        </Button>
      </div>

      <div
        className={classes.newsletter}
        data-aos="fade-up"
        data-aos-delay="800"
      >
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
            and people who would like to stay connected.
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

      <div className={classes.shareOnSocials}>
        <div
          style={{ display: "flex", marginTop: "50px", marginBottom: "10px" }}
        >
          <Typography variant="h3">bruk</Typography>
          <Typography
            style={{
              fontWeight: "700",
              fontSize: "3rem",
              marginLeft: "8px",
              lineHeight: "1.167",
              marginLeft: "20px",
            }}
          >
            #BWlove
          </Typography>
        </div>
        <Typography>på bildene dere legger ut på instagram</Typography>
        <div
          style={{ display: "flex", marginTop: "10px", marginBottom: "50px" }}
        >
          <img className={classes.img} src={interiør} />
          <img className={classes.img} src={delt} />
          <img className={classes.img} src={delt3} />
          <img className={classes.img} src={delt2} />
        </div>
      </div>
    </main>
  );
};
export default Home;
