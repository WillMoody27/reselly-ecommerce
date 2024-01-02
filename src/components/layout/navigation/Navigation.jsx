import React, { useState } from "react";
import { Link } from "react-router-dom";

// Font Awesome
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.css";

const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="nav-section" className="nav-section">
      <div className="nav-section__top-container">
        <div className="top--logo">
          <h1 className="top--logo__resell--brand">
            <Link
              className="top--logo__resell--brand__link"
              to="/"
              style={{ textDecoration: "none" }}
            >
              RESELLY
            </Link>
          </h1>
          <h4 className="top--logo__slogan">Buy. Sell. Trade...Period</h4>
        </div>
        <ul className="top--lists">
          <li className="top--lists__list">About</li>
          <li className="top--lists__list">Signup</li>
          <li className="top--lists__list">Login</li>
        </ul>
      </div>
      <div className="nav-section__bottom-container">
        <div className="bottom-list--container">
          <div
            className={`toggle ${show ? "show" : "hide"}`}
            onClick={() => {
              setShow(!show);
            }}
          >
            <div className={`bar ${show ? "show" : "hide"}`}></div>
            <div className={`bar ${show ? "show" : "hide"}`}></div>
            <div className={`bar ${show ? "show" : "hide"}`}></div>
          </div>
          <ul
            className={`bottom-list--container__bottom--lists ${
              show ? "show" : "hide"
            }`}
          >
            <li className="list">Home & Furniture</li>
            <li className="list">Electronics</li>
            <li className="list">Photography</li>
            <li className="list">PCs & Components</li>
          </ul>
        </div>
        <div className="bottom--content">
          {/* Search button */}
          <div className="bottom--content__search">
            <input
              className="search-bar"
              type="text"
              placeholder="Search for an item"
            />
            <button className="search-btn" type="button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          {/* Search button */}

          {/* Cart button */}
          <div className="bottom--content__shopping--bag">
            <Link
              className="shopping--bag__link"
              to={{
                pathname: "/cart",
              }}
            >
              <button className="shopping--button" type="button">
                <span className="cart-count">2</span>
                <FontAwesomeIcon
                  className="shopping--btn__shopping--bag"
                  icon={faBagShopping}
                />
              </button>
            </Link>
          </div>
          {/* Cart button */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
