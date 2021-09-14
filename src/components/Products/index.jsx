import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import Product from "./Product/index";
import useStyles from "./styles";

const Products = ({
  products,
  onAddToCart,
  totalProducts,
  onShowProductInfo,
}) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.toolbar} />
      <div className={classes.wrapper}>
        {" "}
        <div className={classes.productsAndFilter}>
          <Typography className={classes.header}>
            Produkter: {totalProducts}
          </Typography>
          <Typography className={classes.header}>Filter</Typography>
        </div>
        <Grid container justify="center" spacing={5}>
          {products.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
              <Link to="./">
                <Product product={product} onAddToCart={onAddToCart} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
