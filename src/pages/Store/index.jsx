import React from "react";
import Products from "../../components/Products";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Store = ({ totalProducts, products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.toolbar} />
      <div className={classes.productsAndFilter}>
        <Typography className={classes.header}>
          Produkter: {totalProducts}
        </Typography>
      </div>
      <Products
        totalProducts={totalProducts}
        products={products}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default Store;
