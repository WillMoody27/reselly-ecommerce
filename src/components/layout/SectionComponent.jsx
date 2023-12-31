import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const SectionComponent = ({
  sectionHeader,
  sectionName,
  sectionMsg,
  bgColor,
  dbItems,
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the location changes
  }, [location]);

  return (
    <div
      id="products"
      className={`product-section`}
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      <h2 className="product-section__title">{sectionHeader}</h2>
      <div className="product-section__container">
        <div className="section--meta">
          <p className="section--message">{sectionName}</p>
          {sectionMsg ? <p>{sectionMsg}</p> : null}
          <a href="#products" className="view-more--link">
            View More
          </a>
        </div>
        <div className="product-slider">
          {dbItems.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              state={{ product: item }}
            >
              <article className="product-item" key={item.id}>
                <img src={item.imageUrl} alt="" />
                <div className="product-item__inner">
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <p>{item.description}</p>
                  <p className="meta--location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    {item.location}
                  </p>
                  <div className="button-container">
                    <button className="button">Contact Seller</button>
                    <button className="button">Buy Now</button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
