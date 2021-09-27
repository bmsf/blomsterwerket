import Phone from "@material-ui/icons/Phone";

import useStyles from "./styles";
import { Divider } from "@material-ui/core";

const InfoBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <div className={classes.text}>ÅPNINGSTIDER: MAN-ONS: 10.00-16.30</div>
      <Divider orientation="vertical" light />
      <div className={classes.text}>TORS-FRE: 10.00-18.00</div>
      <Divider orientation="vertical" />
      <div className={classes.text}>LØR: 10.00-15.30</div>
      <Phone className={classes.phone} />
    </div>
  );
};

export default InfoBar;
