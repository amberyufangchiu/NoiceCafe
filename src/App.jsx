import React, { useState, useContext } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Component/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./Component/Footer";

import Context from "./context";

const App = () => {
  const [cartNum, setCartNum] = useState(0);

  return (
    <Context.Provider
      value={{
        cartNum,
        setCartNum,
      }}
    >
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/NoiceCafe" component={Home} exact />
          <Route path="/NoiceCafe/Product" component={Product} />
          <Route path="/NoiceCafe/Cart" component={Cart} />
        </Switch>
        <Footer />
      </HashRouter>
    </Context.Provider>
  );
};

export default App;
