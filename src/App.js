import React from "react";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/Main.css";
import Layout from "./components/layout/Layout";
import ProductDetails from "./components/layout/products/product_details/ProductDetails";
import Navigation from "../src/components/layout/navigation/Navigation";
import Cart from "./components/layout/checkout/cart";
import Footer from "./components/layout/copy/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
