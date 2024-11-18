import React from "react";
import "../App.css";

const Product = (props) => {
  return (
    <div>
      <img className="product-image" src={props.myproduct.img}></img>
      <p>{props.myproduct.name}</p>
      <p>{props.myproduct.price}</p>
    </div>
  );
};

export default Product;
