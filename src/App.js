import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart/index";
import Store from "./pages/Store/index";
import ProductInfo from "./pages/ProductInfo/index";

import Navbar from "./components/Navbar/index";
import Checkout from "./components/CheckoutForm/Checkout/index";
import Footer from "./components/Footer/index";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage ] = useState('');

  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshcart = async () => {
    const newCart = await commerce.cart.refresh();
    
    setCart(cart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshcart();
    }
    catch(error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
    Aos.init();
  }, []);

  //Material UI Theme

  const theme = createMuiTheme({
    typography: {
      fontFamily: `"Jost", "Helvetica", "Arial", sans-serif`,
      h1: { fontFamily: "Roseritta" },
      h2: { fontFamily: "Jost" },
      h3: { fontFamily: "Jost" },
      h4: { fontFamily: "Roseritta" },
      h5: { fontFamily: "Roseritta" },
      h6: { fontFamily: "Jost" },
      body1: { fontFamily: "Jost", fontWeight: "300" },
      body2: { fontFamily: "Jost", fontWeight: "400" },
    },
    palette: {
      primary: {
        main: "#121c25",
      },
      secondary: {
        main: "#F5FAFD",
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: "#f1f1f1",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          {/* <InfoBar /> */}
          <Navbar totalItems={cart.total_items} />
          <Switch>
            <Route exact path="/">
              <Home handleEmptyCart={handleEmptyCart} />
            </Route>
            <Route exact path="/shop">
              <Store
                products={products}
                onAddToCart={handleAddToCart}
                totalProducts={products.length}
              />
              <Route path="/productinfo/:id">
                <ProductInfo />
              </Route>
            </Route>
            {/* <Route exact path="/anledninger">
              <Anledninger />
            </Route> */}
            <Route exact path="/"></Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route exact path="/checkout">
              <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
