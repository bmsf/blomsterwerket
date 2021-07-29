import React, { useState, useEffect } from "react";
import {
  Navbar,
  Header,
  SectionTitle,
  Products,
  Cart,
  Checkout,
  InfoBar,
} from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  console.log(cart);

  return (
    <Router>
      <div className="app">
        <Navbar totalItems={cart.total_items} />
        <Header>
          <SectionTitle
            title="Om oss"
            text="Blomster Werket er et lite blomster-verksted i Råde med fokus på det
            lille ekstra! Vi brenner for vakkert binderi, godt utvalg av tøffe planter,
            sesongens varer, bryllup og sorgbinderi!"
          />
        </Header>

        <Switch>
          <Route exact path="/">
            <SectionTitle
              title="Om oss"
              text="Blomster Werket er et lite blomster-verksted i Råde med fokus på det
            lille ekstra! Vi brenner for vakkert binderi, godt utvalg av tøffe planter,
            sesongens varer, bryllup og sorgbinderi!"
            />
            <h2 className="titles">Nyheter</h2>
            <Products products={products} onAddToCart={handleAddToCart} />
            <SectionTitle
              title="Åpningstider"
              text="Tid: Torsdager 10-18, Fredager 10-18, Lørdager 10-15 Adresse: Ekornveien 4, 1640
        Råde (parker inne på gårdsplassen)"
            />
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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
