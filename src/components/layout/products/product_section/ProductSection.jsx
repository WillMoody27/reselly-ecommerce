import React from "react";
import { electronicsDb, clothingDb } from "../../../../js/products";

import "./ProductSection.css";

import SectionProducts from "../product/SectionProducts";

const ProductSection = () => {
  console.log(electronicsDb);

  return (
    <>
      {/* Electronics Section */}
      <SectionProducts
        sectionHeader={"Electronics"}
        sectionName="Level Up Your Gear"
        dbItems={electronicsDb}
        bgColor={"#000000"}
      />
      {/* Electronics Section */}
      <SectionProducts
        sectionHeader={"Clothing & Attire"}
        sectionName="Looking For A New Fit?"
        sectionMsg={"New Styles From Top Sellers Uploaded Daily!"}
        dbItems={clothingDb}
        bgColor={"#3C3C3C"}
      />
    </>
  );
};

export default ProductSection;
