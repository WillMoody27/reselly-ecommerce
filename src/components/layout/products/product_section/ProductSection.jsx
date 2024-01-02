import React from "react";
// import { electronicsDb, clothingDb } from "../../../../js/products";
import { sections } from "../../../../js/products";

// CSS
import "./ProductSection.css";

import SectionProducts from "../product/SectionProducts";

/**
 * @function ProductSection
 * @description A component that renders the product sections
 * **/

const ProductSection = () => {
  return (
    <>
      {/* Dynamically Load Section For Electronics and Clothing & Attire -> D.R.Y */}
      {sections.map((section) => (
        <SectionProducts
          key={section.id}
          id={section.id}
          className={section.className}
          style={{
            backgroundColor: `${section.backgroundColor}`,
          }}
          sectionHeader={section.sectionHeader}
          sectionName={section.sectionName}
          sectionMsg={section.sectionMsg}
          dbItems={section.dbItems}
        />
      ))}
    </>
  );
};

export default ProductSection;
