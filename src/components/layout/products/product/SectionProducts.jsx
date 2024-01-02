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
  ...props // pass in the rest of the props
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the location changes
  }, [location]);

  return (
    <div {...props}>
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
              state={{
                product: item,
              }}
            >
              <article className="product-item" key={item.id}>
                <img
                  className="product-item__image"
                  src={item.details.imageUrl}
                  width={300}
                  height={200}
                  alt=""
                />
                <div className="product-item__inner">
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <p>{item.description}</p>
                  <p className="meta--location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    {item.location}
                  </p>
                  <div className="button-container">
                    <Link
                      to={{
                        pathname: "/contact",
                        state: {
                          product: item,
                        },
                      }}
                      className="button"
                    >
                      Contact Seller
                    </Link>
                    <Link
                      to={{
                        pathname: "/cart",
                        state: {
                          product: item,
                        },
                      }}
                      className="button"
                    >
                      Buy Now
                    </Link>
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
