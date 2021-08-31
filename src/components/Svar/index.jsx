import React from "react";
import useStyles from "./styles";

import butikk from "../../assets/svar3.jpeg";
import omoss from "../../assets/omoss.jpeg";

const Svar = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <div className={classes.wrapper}>
        <section className={classes.topSection}>
          <img src={butikk} className={classes.leftTopSection} />
          <div className={classes.rightTopSection}>
            <h2 className={classes.topCategoryHeader}>
              Hva er åpningstidene deres?
            </h2>
            <p className={classes.p}>
              Åpent mandag-onsdag 10-16.30 - torsdager og fredager 10-18, lørdag
              10-15.30
            </p>
            <h2 className={classes.topCategoryHeader}>Hvor holder dere til?</h2>
            <p className={classes.p}>Nethusveien 1 1640 Råde</p>
            <h2 className={classes.topCategoryHeader}>
              Når kan jeg hente bestillingen min?
            </h2>
            <p className={classes.p}>
              Bestillingen din kan du hente når som helst i åpningstiden vår!
            </p>
            <h2 className={classes.topCategoryHeader}>Leverer dere?</h2>
            <p className={classes.p}>Ja vi leverer</p>
          </div>
        </section>
        <section className={classes.bottomSection}>
          <div className={classes.leftBottomSection}>
            <div className={classes.title}>
              <h1 className={classes.bottomSectionHeader}>Vi lager</h1>
              <h1 className={classes.lowerBottomSectionHeader}>
                det vi elsker
              </h1>
            </div>
            <p className={classes.pBottom}>
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
          <img src={omoss} className={classes.rightBottomSection} />
        </section>
      </div>
    </main>
  );
};

export default Svar;
