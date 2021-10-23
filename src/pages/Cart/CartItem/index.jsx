import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  console.log(item);

  return (
    <Card className={classes.cartCard} elevation={0}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body5" className={classes.itemName}>
          {item.name}
        </Typography>
        <Typography className={classes.itemName}>
          {item.line_total.formatted_with_symbol}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Card className={classes.cards}>
            {" "}
            <IconButton
              style={{ height: "20px" }}
              size="small"
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              <RemoveIcon style={{ width: "15px" }} />
            </IconButton>
          </Card>
          <Typography>{item.quantity}</Typography>

          <Card className={classes.cards}>
            {" "}
            <IconButton
              style={{ height: "20px" }}
              size="small"
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              <AddIcon style={{ width: "15px" }} />
            </IconButton>
          </Card>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <CheckIcon />
          <Typography>{item.inventory}</Typography>
          <Typography>På lager</Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton>
          <CloseIcon onClick={() => onRemoveFromCart(item.id)} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
