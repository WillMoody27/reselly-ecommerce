import React from "react";
import HeroImage from "../../assets/images/faded-camera-lens.png";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <div className="hero--left-content">
          <h5 className="hero--left-content__item--promo">Daily Discover</h5>
          <p className="hero--left-content__item--name">Canon EOS R155</p>
          <button
            type="button"
            className="hero--left-content__item--condition-button"
          >
            Pre-Owned
          </button>
          <p className="hero--left-content__message--cta">
            Time To Level Up Your Camera Game.
          </p>
          <a href="#hero" className="hero--left-content__item--link">
            View Listing
          </a>
        </div>
        <img className="hero--right-image" src={HeroImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
