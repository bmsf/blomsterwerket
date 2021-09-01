import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  // IconButton,
  Divider,
  // Button,
} from "@material-ui/core";
// import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

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
            color="textSecondary"
          />
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <div
          className={classes.grouping}
          onClick={() => onAddToCart(product.id, 1)}
        >
          <Typography className={classes.bodyText}>
            {product.price.formatted_with_symbol}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography className={classes.bodyText}>Kjøp nå</Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default Product;
