import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import Navigation from "./Navigation";
import ProductSection from "./ProductSection";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Category />
      <ProductSection />
    </>
  );
};

export default Layout;
