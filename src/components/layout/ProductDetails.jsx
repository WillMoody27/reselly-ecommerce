import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import SectionComponent from "./SectionComponent";
import { clothingDb } from "../../js/exports";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state;
  const { title, price, description, location: loc } = product;
  console.log(product);

  return (
    <div className="product-details">
      <div className="product-details__spacer">
        <p>{}</p>
      </div>
      <div className="product-details__container">
        <div className="product-details__container--left">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="product-details__container--right">
          <h2>{title}</h2>
          <p>{price}</p>
          <p>{description}</p>
          <p>{loc}</p>
          <div className="button-container">
            <button className="button">Contact Seller</button>
            <button className="button">Buy Now</button>
          </div>
        </div>
      </div>
      <SectionComponent
        sectionHeader={"Clothing & Attire"}
        sectionName="Looking For A New Fit?"
        sectionMsg={"New Styles From Top Sellers Uploaded Daily!"}
        dbItems={clothingDb}
        bgColor={"#3C3C3C"}
      />
    </div>
  );
};

export default ProductDetails;
