import React from "react";
import "./Cart.css";

const cart = () => {
  return (
    <div
      className="reselly-cart"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="reselly-cart__spacer"></div>
      <div className="reselly-cart__container">
        <p>Cart</p>
      </div>
    </div>
  );
};

export default cart;
