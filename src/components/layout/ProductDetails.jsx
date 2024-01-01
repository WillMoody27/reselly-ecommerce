import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import SectionComponent from "./SectionComponent";
import { clothingDb } from "../../js/products";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state;
  const {
    listed,
    user: {
      name,
      avatar,
      acctStatus: { isVerified, topSeller },
      reviews: { count: reviewCount },
      listings: { count: listCount },
      sales: { count: saleCount },
    },
    title,
    price,
    details: { imageUrl, description, condition, brand, model, category },
    location: loc,
  } = product;
  console.log(product);
  console.log(isVerified);

  return (
    <div className="product-details">
      <div className="product-details__spacer"></div>
      <div
        className="product-details__container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="product-details__container--left">
          <div className="listing--content">
            <p className="listing--content_listed">{listed}</p>
            <h2 className="listing--content_title">{title}</h2>
            <p className="listing--content_price">{price}</p>
            <p className="listing--content__del--fee">+$9.60 Delivery Fee</p>
            <div>
              {" "}
              <p className="listing--content__payment--plan">
                Pay in 4 interest-free payments of $46.25
              </p>
              <span>
                <Link
                  className="learn-more"
                  to={{
                    pathname: "/learn-more",
                  }}
                >
                  Learn More
                </Link>
              </span>
            </div>
            <div className="button-container">
              <button className="cart-button">Add to Cart</button>
              <button className="button">Buy Now</button>
              <div className="checkout--divider-or">
                <p>or</p>
              </div>
              <button className="button">
                PayPal <span>Checkout</span>
              </button>
            </div>
            <p className="legal--content">
              *By continuing to checkout, you agree to the RESELL’s{" "}
              <Link
                className="legal--content__link"
                to={{
                  pathname: "/privacy-policy",
                }}
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                className="legal--content__link"
                to={{
                  pathname: "/terms-of-service",
                }}
              >
                Terms Of Service
              </Link>
              .
            </p>
          </div>
          <div className="user">
            <div className="user__wrapper">
              <img className="avatar-image" src={avatar} alt="user-avatar" />
              <div className="user--meta">
                <p className="user--name">{name}</p>
                <div className="user--details">
                  <p className="reviews--text">{reviewCount} Reviews</p>
                  <p className="listings--text">{listCount} Listings</p>
                  <p className="sales--text">{saleCount} Sales</p>
                </div>
                {isVerified ? (
                  <p className="user--verified">
                    Verified {topSeller ? <span>| Top Seller</span> : null}
                  </p>
                ) : null}
                <button type="button" className="view-shop--btn">
                  View Shop
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details__container--right">
          <img className="product--image" src={imageUrl} alt="" />
          <div className="product--meta">
            <h3>Item Details</h3>
            <div className="product--meta__condition">
              <span>Condition</span>
              <span>{condition}</span>
            </div>
            <div className="product--meta__brand">
              <span>Brand</span>
              <span>{brand}</span>
            </div>
            <div className="product--meta__model">
              <span>Model</span>
              <span>{model}</span>
            </div>
            <div className="product--meta__description">
              <span>Description</span>
              <span>{description}</span>
            </div>
            <div className="product--meta__category">
              <span>Category</span>
              <div className="product--meta__category__inner--tags">
                {category.map((item, index) => {
                  return (
                    <Link
                      className="category--tag"
                      to={{
                        pathname: "/category/",
                      }}
                      key={index}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
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
