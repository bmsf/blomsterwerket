import React from "react";
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Divider,
  // Button,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const [buyButton, setBuyButton] = useState(true);

  const handleBuy = () => {
    onAddToCart(product.id, 1);
    setBuyButton(false);
    setTimeout(function () {
      setBuyButton(true);
    }, 2000);
  };

  const FilledButton = () => {
    return (
      <div className={classes.grouping} onClick={handleBuy}>
        <Typography className={classes.bodyText}>
          {product.price.formatted_with_symbol}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography className={classes.bodyText}>Kjøp nå</Typography>
      </div>
    );
  };

  const ConfirmationButton = () => {
    return (
      <div className={classes.confirmationBox}>
        <Typography className={classes.bodyText}>Lagt til</Typography>
        <Divider orientation="vertical" flexItem />
        <IconButton style={{ padding: 0, color: "green" }}>
          <Check style={{ fill: "green" }} />
        </IconButton>
      </div>
    );
  };

  return (
    <Card className={classes.root} elevation="0">
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography className={classes.header} gutterBottom>
            {product.name}
          </Typography>
        </div>
        <Divider variant="middle" />
        <div className={classes.cardContent}>
          <Typography
            className={classes.bodyText}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        {buyButton ? <FilledButton /> : <ConfirmationButton />}
      </CardActions>
    </Card>
  );
};

export default Product;
