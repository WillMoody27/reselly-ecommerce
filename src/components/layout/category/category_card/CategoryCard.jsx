import React from "react";

const CategoryCard = ({ categoryName, image, ...props }) => {
  return (
    <div {...props}>
      <a href="#category">
        <img className="category-images" width={300} src={image} alt="" />
        <p>{categoryName}</p>
      </a>
    </div>
  );
};

export default CategoryCard;
