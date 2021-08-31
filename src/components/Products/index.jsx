import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/index";
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.wrapper}>
        {" "}
        <Grid container justify="center" spacing={2}>
          {products.map((product) => (
            <Grid
              item
              key={product.id}
              xs={10}
              sm={6}
              md={4}
              lg={3}
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
