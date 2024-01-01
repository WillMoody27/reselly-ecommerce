// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// get the data from export.js
import { electronicsDb, clothingDb } from "../../js/products";

import SectionComponent from "./SectionComponent";

const ProductSection = () => {
  console.log(electronicsDb);

  return (
    <>
      {/* Electronics Section */}
      <SectionComponent
        sectionHeader={"Electronics"}
        sectionName="Level Up Your Gear"
        dbItems={electronicsDb}
        bgColor={"#000000"}
      />
      {/* Electronics Section */}
      <SectionComponent
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
