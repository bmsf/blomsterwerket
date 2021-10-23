import React from "react";
import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Divider,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import useStyles from "./styles";
import CartItem from "./CartItem/index";
import Popup from "../../components/Popup/index.jsx";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <>
      {" "}
      <div className={classes.wrapper}>
        <Typography className={classes.title} gutterBottom>
          HANDLEKURV
        </Typography>
        <Typography className={classes.infoTitle}>
          Du har ingen varer i handlekurven din!
        </Typography>
      </div>
    </>
  );

  //Popup button

  const [buttonPopup, setButtonPopup] = useState(false);

  const FilledCart = () => (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h3"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          Handlekurv
        </Typography>
        <Divider />
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
            <Divider />
          </Grid>
        ))}

        <div className={classes.summary}>
          <Typography variant="h5" style={{ margin: "20px" }}>
            Sammendrag
          </Typography>
          <div className={classes.rows}>
            <Typography variant="h6">Delsum</Typography>
            <Typography variant="h6">
              {cart.subtotal.formatted_with_symbol}
            </Typography>
          </div>
          <Divider />
          <div className={classes.rows}>
            <Typography variant="h6">Leveringskostnad</Typography>
            <Typography variant="h6">kr50.00</Typography>
          </div>
          <Divider />
          <div className={classes.rows}>
            <Typography variant="h6">Total sum</Typography>
            <Typography variant="h6">
              {cart.subtotal.formatted_with_symbol}
            </Typography>
          </div>
          <Button
            variant="contained"
            style={{ height: "50px" }}
            color="primary"
            component={Link}
            to="/checkout"
          >
            Gå til kassen
          </Button>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Button onClick={handleEmptyCart}>Ja</Button>
      </Popup>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

{
  /* <Grid
        container
        spacing={3}
        direction="column"
        className={classes.container}
      >
        <div className={classes.cardDetails}>
          <div className={classes.cartButtonRow}>
            <Button
              component={Link}
              to="/checkout"
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Gå til kassen
            </Button>
          </div>
          <div className={classes.cartHeader}>
            <Typography className={classes.title}>HANDLEKURV</Typography>
            <Button
              className={classes.emptyButton}
              onClick={() => setButtonPopup(true)}
              color="primary"
            >
              Tøm handlekurv
            </Button>
          </div>
        </div>
        <Divider />
        <div className={classes.subHeader}>
          <div className={classes.subHeader}>
            <Typography className={classes.subHeaderTextAntall}>
              Navn
            </Typography>
            <Typography className={classes.subHeaderTextPris}>
              Antall
            </Typography>
            <Typography className={classes.subHeaderText}>Pris</Typography>
            <Typography className={classes.subHeaderText}>Slett</Typography>
          </div>
        </div>
        <Divider style={{ paddingBottom: "2px" }} />
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}

        <Typography className={classes.totalSum}>
          Total: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className={classes.cartButtonRow}>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Gå til kassen
          </Button>
        </div>
      </Grid> */
}

export default Cart;
