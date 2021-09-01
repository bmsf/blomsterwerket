import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cartCard}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.itemName}>{item.name}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            className={classes.itemName}
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography className={classes.itemName}>{item.quantity}</Typography>
          <Button
            className={classes.itemName}
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Typography className={classes.itemName}>
          {item.line_total.formatted_with_symbol}
        </Typography>
        <IconButton>
          <HighlightOffIcon onClick={() => onRemoveFromCart(item.id)} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
