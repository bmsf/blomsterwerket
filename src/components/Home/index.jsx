import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import image from "../../assets/mainpage.jpeg";
import "../../index.css";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.container}>
        <section
          className={classes.one}
          data-aos="fade"
          data-aos-duration="3000"
        >
          <h1 className={classes.frontPageHeader}>Blomster Werket</h1>
          <a href="#middle">
            <div className={classes.scrollWrapper}>
              Scroll
              <ExpandMoreIcon className="arrow bounce" />
            </div>
          </a>
        </section>

        <section id="middle" className={classes.two}>
          <div className={classes.textContainer}>
            <img
              style={{
                width: "80%",
                maxHeight: "100%",
                objectFit: "fit",
              }}
              src={image}
            ></img>
          </div>
          <div className={classes.textContainer}>
            <h3 className={classes.sectionHeader}>
              Blomster Werket er et lite blomster-verksted i Råde med fokus på
              det lille ekstra! Vi brenner for vakkert binderi, godt utvalg av
              tøffe planter, sesongens varer, bryllup og sorgbinderi!
            </h3>
            <p className={classes.sectionParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        <section className={classes.three}>
          <h1 className={classes.frontPageHeader}>Side 3</h1>
        </section>
      </div>
    </main>
  );
};
export default Home;
