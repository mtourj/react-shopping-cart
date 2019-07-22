import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Contexts
import { ProductContext, CartContext } from "./contexts";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <Navigation />
        <Route path="/cart" component={ShoppingCart} />
      </CartContext.Provider>
			
      <ProductContext.Provider value={{ products, addItem }}>
        {/* Routes */}
        <Route exact path="/" component={Products} />} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
