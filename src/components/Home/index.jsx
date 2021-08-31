import React from "react";
import { Grid, Container, Button } from "@material-ui/core";

import image from "../../assets/mainpage.jpeg";
import image2 from "../../assets/mainpage768px.jpg";
import wedding from "../../assets/wedding.jpeg";
import wedding2 from "../../assets/wedding2.jpeg";
import wedding3 from "../../assets/wedding3.jpeg";
import plant from "../../assets/plant4.jpg";
import plantportrait from "../../assets/plantportrait.jpeg";
import binderi from "../../assets/blomsterbinderi.jpeg";
import "../../index.css";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <main
      className={classes.main}
      className={classes.root}
      data-aos-easing="ease"
      data-aos-duration="600"
    >
      <div className={classes.toolbar} />
      <Container className={classes.wrapper}>
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
              <img src={plant} className={classes.binderiImg} />
              <div className={classes.topTextDiv}>
                <h2 className={classes.topCategoryHeader}>Blomsterbinderi</h2>
                <p className={classes.topSubHeader}>
                  Velkommen til Blomster Werket!
                </p>
                <Button variant="contained" className={classes.topButton}>
                  Se utvalg
                </Button>
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
                <img src={binderi} className={classes.smallCategoriesImg} />
                <div className={classes.textDiv}>
                  <h2 className={classes.mainCategoryHeader}>
                    Blomster til bryllup
                  </h2>
                  <p className={classes.subHeader}>
                    Velkommen til Blomster Werket!
                  </p>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.buttonMain}
                  >
                    Se Utvalg
                  </Button>
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
                <img src={image} className={classes.smallCategoriesImg} />
                <div className={classes.textDiv}>
                  <h2 className={classes.mainCategoryHeader}>
                    Blomster til bryllup
                  </h2>
                  <p className={classes.subHeader}>
                    Velkommen til Blomster Werket!
                  </p>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.buttonMain}
                  >
                    Se Utvalg
                  </Button>
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
              <img src={wedding} className={classes.plantImg} />
              <div className={classes.textDiv}>
                <h2 className={classes.mainCategoryHeader}>
                  Blomster til bryllup
                </h2>
                <p className={classes.subHeader}>
                  Velkommen til Blomster Werket!
                </p>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.buttonMain}
                >
                  Se Utvalg
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
export default Home;
