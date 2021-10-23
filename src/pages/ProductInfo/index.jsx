import React from "react";
import { useState, useEffect } from "react";
import {
  Breadcrumbs,
  Link,
  Container,
  Typography,
  Checkbox,
  CircularProgress,
  Button,
} from "@material-ui/core";

import { HomeOutlined } from "@ant-design/icons";
import { commerce } from "../../lib/commerce";
import useStyles from "./styles";
// import Footer from "../Footer/index";

import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const [checked, setChecked] = useState(true);
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [isPending, setPending] = useState(true);

  const { id } = useParams();
  const classes = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  setTimeout(() => {
    commerce.products.retrieve(id).then((product) => {
      setImg(product.media.source);
      setPrice(product.price.formatted_with_code);
      setTitle(product.name);
      setDescription(product.description);
    });

    setPending(false);
  });

  return (
    <Container>
      <div className={classes.toolbar} />
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ paddingBottom: "20px", paddingTop: "30px" }}
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
          {title}
        </Link>
      </Breadcrumbs>

      <div className={classes.container}>
        <div
          className={classes.infoContainer}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          {isPending ? (
            <CircularProgress
              style={{ justifyContent: "center", alignSelf: "center" }}
            />
          ) : (
            <img src={img} className={classes.infoImg} alt="" />
          )}
        </div>
        <div className={classes.infoContainer} data-aos="fade-up">
          <Typography
            style={{
              fontFamily: "Roseritta",
              fontSize: "3rem",
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            {title}
          </Typography>
          <Typography
            style={{
              fontFamily: "Roseritta",
              fontSize: "1.5rem",
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2000"
          >
            {price}
          </Typography>
          <Typography
            variant="body1"
            style={{ width: "90%" }}
            dangerouslySetInnerHTML={{ __html: description }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="3000"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="3000"
          >
            <Typography variant="h6">Choose option: </Typography>
            <input></input>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="3000"
          >
            <Typography variant="h6">Quantity</Typography>
            <input></input>
          </div>

          <div
            className={classes.checkBox}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="3000"
          >
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography
              variant="body1"
              style={{ display: "flex", alignItems: "center" }}
            >
              Make it a subscription!
            </Typography>
          </div>
          <Button
            className={classes.buyNow}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="3000"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ProductInfo;
