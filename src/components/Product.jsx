import React from "react";

const Product = ({ product: { id, name, price } }) => {
  return (
    <div className="border p-5 rounded mb-3 flex justify-between items-center">
      <p className="product-name text-gray-600">{name}</p>
      <p className="product-price text-gray-400">{price}</p>
    </div>
  );
};

export default Product;
