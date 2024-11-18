import React from "react";
import "../App.css";
import products from "../data/products";

const ProductList = () => {
  const productslist = products.map((myproduct, index) => {
    return (
      <div key={index}>
        <div className="product-container">
          <div className="product-info">
            <div className="App-link">
              <img className="product-image" src={myproduct.image}></img>
              <p >{myproduct.name}</p>
              <p>{myproduct.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="row">{productslist}</div>
    </div>
  );
};

export default ProductList;
