import React from "react";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/Main.css";
import Layout from "./components/layout/Layout";
import ProductDetails from "./components/layout/ProductDetails";
import Navigation from "./components/layout/Navigation";
import Copy from "./components/layout/copy/Copy";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <Copy />
    </Router>
  );
}

export default App;
