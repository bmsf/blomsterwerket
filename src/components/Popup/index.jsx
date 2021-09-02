import { CardActions, CardContent, makeStyles } from "@material-ui/core";
import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./styles";

const Popup = (props) => {
  const classes = useStyles();

  return props.trigger ? (
    <div className={classes.popup}>
      <Card className={classes.card}>
        <CardActions className={classes.cardActions}>
          <IconButton className={classes.iconButton}>
            <CloseIcon onClick={() => props.setTrigger(false)} />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography className={classes.text} variant="h6">
            Tømme handlevogn?
          </Typography>
          <Typography className={classes.text} variant="body5">
            Er du sikker på at du vil tømme handlevognen?
          </Typography>
          <CardActions className={classes.buttonRow}>
            <Button onClick={() => props.setTrigger(false)}>Nei</Button>
            {props.children}
          </CardActions>
        </CardContent>
      </Card>
    </div>
  ) : (
    ""
  );
};

export default Popup;
