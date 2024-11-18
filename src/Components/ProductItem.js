import React from "react";
import firstProduct from "../31+tj+uVB+L._UL500_.jpg";
import "../App.css";

const ProductItem = () => {
  return (
    <div className="text-container">
      <img className="product-image" src={firstProduct}></img>
      <p className="product-info">my component product</p>
      <p className="product-info">2kd</p>
    </div>
  );
};

export default ProductItem;
