import React from "react";
import { useState } from "react";
import {
  Breadcrumbs,
  Link,
  Container,
  Typography,
  Checkbox,
} from "@material-ui/core";
// import { Home, HomeOutlined } from "@material-ui/icons";
import { HomeOutlined } from "@ant-design/icons";

import useStyles from "./styles";
import bestseller from "../../assets/bestseller1.png";
import { useParams } from "react-router-dom";
import fetchProducts from "../../App";

const ProductInfo = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();

  const { id } = useParams();
  // const { data: product } = fetchProducts();

  return (
    <Container>
      <div className={classes.toolbar} />

      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ paddingBottom: "50px", paddingTop: "30px" }}
      >
        <Link color="Primary" href="./">
          <HomeOutlined className={classes.icon} style={{ fill: "#121c25" }} />
        </Link>
        <Link color="primary" href="/shop" style={{ fontFamily: "Jost" }}>
          Butikk
        </Link>
        <Link
          color="primary"
          href="./productinfo"
          aria-current="page"
          style={{ fontFamily: "Jost" }}
        >
          {id}
        </Link>
      </Breadcrumbs>

      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <img
            src={bestseller}
            className={classes.infoImg}
            alt="bilde av vare"
          />
        </div>
        <div className={classes.infoContainer}>
          <Typography
            style={{
              fontFamily: "Roseritta",
              fontSize: "3rem",
            }}
          >
            Product
          </Typography>
          <Typography
            style={{
              fontFamily: "Roseritta",
              fontSize: "2rem",
            }}
          >
            $40
          </Typography>
          <Typography
            variant="body1"
            style={{ width: "90%", paddingBottom: "10px" }}
          >
            Looking for the perfect thing for that person in your life who seems
            to have everything (you know the one)? This is it! Not too small,
            not too big, it's just right! Designed in house with love, this
            stunner combines 20 stems of gorgeous blooms, fun foliage, and bits!
          </Typography>
          <Typography variant="h6">Choose option: </Typography>
          <input></input>
          <Typography variant="h6">Quantity</Typography>
          <input></input>
          <div style={{ display: "flex" }}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="body1">Make it a subscription!</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductInfo;
