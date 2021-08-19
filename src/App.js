import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/index";
import Header from "./components/Header/index";
import Navbar from "./components/Navbar/index";
import Products from "./components/Products/index";
import SectionTitle from "./components/SectionTitle/index";
import Checkout from "./components/CheckoutForm/Checkout/index";

import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";

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
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar totalItems={cart.total_items} />
        <FrontPage />
        {/* <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
            <SectionTitle
              title="Om oss"
              text="Blomster Werket er et lite blomster-verksted i Råde med fokus på det
            lille ekstra! Vi brenner for vakkert binderi, godt utvalg av tøffe planter,
            sesongens varer, bryllup og sorgbinderi! Åpningstidene våre er: Torsdager 10-18, Fredager 10-18, Lørdager 10-15 Adresse: Ekornveien 4, 1640
            Råde (parker inne på gårdsplassen)"
            />
            <h2 className="titles">Nyheter</h2>
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
            <SectionTitle />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
};

export default App;
