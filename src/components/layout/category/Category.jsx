import React from "react";
import "./Category.css";
import { categories } from "../../../js/products";
import CategoryCard from "./category_card/CategoryCard";

const Category = () => {
  return (
    <section id="category" className="category">
      <div className="category__category--cards">
        <h2 className="category--title">Categories</h2>

        <div className="category--image-container">
          {/* Dynamic Cateogries - D.R.Y */}
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              className="category--meta"
              image={category.image}
              categoryName={category.categoryName}
            />
          ))}
          {/* Dynamic Cateogries - D.R.Y */}
        </div>
      </div>
    </section>
  );
};

export default Category;
