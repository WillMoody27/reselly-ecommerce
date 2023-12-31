import React from "react";
import categoryImg1 from "../../assets/category-images/reselly-photography-img.png";
import categoryImg2 from "../../assets/category-images/reselly-electronics-img.png";
import categoryImg3 from "../../assets/category-images/reselly-software-img.png";

const Category = () => {
  return (
    <section id="category" className="category">
      <div className="category__category--cards">
        <h2 className="category--title">Categories</h2>
        <div className="category--image-container">
          <div className="category--meta">
            <a href="#category">
              <img
                className="category-images"
                width={300}
                src={categoryImg1}
                alt=""
              />
              <p>Photography</p>
            </a>
          </div>
          <div className="category--meta">
            <a href="#category">
              <img
                className="category-images"
                width={300}
                src={categoryImg2}
                alt=""
              />
              <p>Electronics</p>
            </a>
          </div>
          <div className="category--meta">
            <a href="#category">
              <img
                className="category-images"
                width={300}
                src={categoryImg3}
                alt=""
              />
              <p>Software</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
