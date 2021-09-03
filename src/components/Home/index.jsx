import React from "react";
import {
  Grid,
  Container,
  Button,
  Box,
  TextField,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "@material-ui/icons";

import binderilandscape from "../../assets/binderilandscape.jpeg";
import wedding from "../../assets/wedding.jpeg";
import binderi from "../../assets/blomsterbinderi.jpeg";
import interiør from "../../assets/interiør.jpeg";
import omoss from "../../assets/omoss.jpeg";

import "../../index.css";

import useStyles from "./styles";

const Home = ({ handleEmptyCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <Container className={classes.wrapper} maxWidth="xl">
        <Grid container direction="row">
          <Grid
            container
            xs={0}
            sm={0}
            md={6}
            spacing={0}
            style={{ alignItems: "stretch" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.topLandscapeContainer}
              data-aos="fade-right"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <div className={classes.binderiImg}>
                <img
                  src={binderilandscape}
                  className={classes.binderiImg}
                  alt="Bilde av binderi"
                />
                <div className={classes.landscapeImgOverlay}>
                  <div className={classes.topTextDiv}>
                    <h2 className={classes.topCategoryHeader}>
                      Blomsterbinderi
                    </h2>
                    <p className={classes.topSubHeader}>
                      Velkommen til Blomster Werket!
                    </p>
                    <Button
                      variant="contained"
                      className={classes.topButton}
                      onClick={handleEmptyCart}
                    >
                      Utforsk
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} container>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className={classes.smallCategoriesContainer}
                style={{ paddingRight: "10px" }}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
                data-aos-easing="ease-in-quad"
              >
                <div className={classes.smallCategoriesImg}>
                  <img
                    src={binderi}
                    className={classes.smallCategoriesImg}
                    alt="Bilde av binderi"
                  />
                  <div className={classes.smallImgOverlayLeft}>
                    <div className={classes.textDiv}>
                      <h2 className={classes.mainCategoryHeader}>Buketter</h2>
                      <p className={classes.subHeader}>Bestill i nettbutikk</p>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        className={classes.buttonMain}
                      >
                        Se utvalg
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className={classes.smallCategoriesContainer}
                style={{ paddingLeft: "10px" }}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
                data-aos-easing="ease-in-quad"
              >
                <div className={classes.smallCategoriesImg}>
                  <img
                    src={interiør}
                    className={classes.smallCategoriesImg}
                    alt="bilde av binderi"
                  />
                  <div className={classes.smallImgOverlayRight}>
                    <div className={classes.textDiv}>
                      <h2 className={classes.mainCategoryHeader}>Interiør</h2>
                      <p className={classes.subHeader}>Nyheter!</p>
                      <Button
                        variant="contained"
                        color="inherit"
                        size="medium"
                        className={classes.buttonMain}
                      >
                        Se utvalg
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={0} sm={0} md={6} spacing={0}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={8}
              className={classes.largeCategoryContainer}
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="600"
              data-aos-delay="900"
            >
              <div className={classes.weddingImgContainer}>
                <img
                  src={wedding}
                  className={classes.weddingImg}
                  alt="bilde av bryllup"
                />
                <div className={classes.weddingImgOverlay}>
                  <div className={classes.textDiv}>
                    <h2 className={classes.mainCategoryHeader}>
                      Blomster til bryllup
                    </h2>
                    <p className={classes.subHeader}>
                      Vi steller i stand alt til ditt bryllup
                    </p>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.buttonMain}
                    >
                      Utforsk
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <section
        className={classes.bottomSection}
        data-aos="fade-up"
        // data-aos-easing="ease-in"
        // data-aos-duration="600"
      >
        <div className={classes.leftBottomSection}>
          <h1
            className={classes.bottomSectionHeader}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-easing="ease"
            data-aos-duration="600"
          >
            Vi lager
          </h1>
          <div>
            <h1 className={classes.lowerBottomSectionHeader}>det vi elsker</h1>

            <p
              className={classes.pBottom}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <img
          src={omoss}
          className={classes.rightBottomSection}
          alt="bilde av ansatte"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="600"
        />
      </section>
      <footer className={classes.footer}>
        <Container>
          <Grid container spacing={5} className={classes.footerContainer}>
            <Grid item lg={3}>
              <Box className={classes.footerHeader}>Snarveier</Box>
              <Box className={classes.footerText}>
                <Link>Søk</Link>
              </Box>
              <Box className={classes.footerText}>
                <Link>Kontakt</Link>
              </Box>
              <Box className={classes.footerText}>
                <Link>Spørsmål & Svar</Link>
              </Box>
              <Box className={classes.footerText}>
                <Link>Ofte stilte spørsmål</Link>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={classes.footerHeader}>Nyhetsbrev</Box>
              <Box className={classes.footerText}>
                Meld deg på nyhetsbrevet og bli oppdatert på nyheter og tilbud.{" "}
                <form className={classes.nyhetsbrevField}>
                  <TextField label="Skriv inn din epost" />
                </form>
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </main>
  );
};
export default Home;
