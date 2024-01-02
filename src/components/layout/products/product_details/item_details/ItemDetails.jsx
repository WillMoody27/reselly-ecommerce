import React from "react";

const ItemDetails = ({ details, ...props }) => {
  console.log(details);

  // Convert details object into an array of key-value pairs
  const detailEntries = Object.entries(details).filter(
    ([key, value]) => key !== "imageUrl" && key !== "category"
  );

  return (
    <>
      {detailEntries.map(([key, value], idx) => (
        <div key={key} {...props}>
          <span>{key}</span>
          <span>{value}</span>
        </div>
      ))}
    </>
  );
};

export default ItemDetails;
