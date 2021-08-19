import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import image from "../../assets/mainpage4.jpeg";
import "../../index.css";

import useStyles from "./styles";

const FrontPage = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <div className={classes.container}>
        <section
          className={classes.one}
          data-aos="fade"
          data-aos-duration="2000"
        >
          <h1 className={classes.frontPageHeader}>Blomster Werket</h1>
        </section>
        <section className={classes.two} data-aos="fade-up">
          <img className={classes.img}></img>
          <div
            className={classes.textContainer}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
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
export default FrontPage;
