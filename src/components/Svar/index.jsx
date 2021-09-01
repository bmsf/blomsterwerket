import React from "react";
import useStyles from "./styles";

import butikk from "../../assets/wedding3.jpeg";


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
          </div>
        </section>
        
      </div>
    </main>
  );
};

export default Svar;
