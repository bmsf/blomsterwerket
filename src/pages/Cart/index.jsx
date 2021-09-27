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
      <Grid
        container
        spacing={3}
        direction="column"
        className={classes.container}
      >
        <div className={classes.cardDetails}>
          <div className={classes.cartButtonRow}>
            <Button
              component={Link}
              to="/"
              className={classes.keepShoppingButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Fortsett å handle
            </Button>
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
            to="/"
            className={classes.keepShoppingButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Fortsett å handle
          </Button>
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
      </Grid>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Button onClick={handleEmptyCart}>Ja</Button>
      </Popup>
      ;
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <div className={classes.toolbar} />
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;