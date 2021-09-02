import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/index";
import Navbar from "./components/Navbar/index";
import Products from "./components/Products/index";
import Checkout from "./components/CheckoutForm/Checkout/index";


import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Svar from "./components/Svar";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

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

  useEffect(() => {
    fetchProducts();
    fetchCart();
    Aos.init({ startEvent: "load", once: false });
  }, []);

 

  return (
    <Router>
      <div className="app">
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Home handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path="/shop">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              totalProducts={products.length}
            />
          </Route>
          <Route exact path="/anledninger"></Route>
          <Route exact path="/svar">
            <Svar />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
            
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
