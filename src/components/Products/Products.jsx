import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Eucalpytus",
    description: "Plante.",
    price: "150kr",
    image:
      "https://img6.custompublish.com/getfile.php/4768103.2726.zmwuzpumkasqaw/Ranveig-Klingberg_Eukalyptustre3.jpg",
  },

  {
    id: 2,
    name: "Roser",
    description: "Blomst.",
    price: "50kr",
    image:
      "https://floriss.no/getfile.php/4779031.2726.zaz7lkltzjinja/1200x630/si-det-med-romantiske-roser-topp-v1.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
