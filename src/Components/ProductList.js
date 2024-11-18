import React from 'react';
import '../App.css';
import ProductItem from '../Components/ProductItem';
import products from '../data/products';

const ProductList = () => {
    const Productlist = products.map((product, index) => {
        return <ProductItem/>;
        })

    return (
     <div>
       <div className = "row" >
        {Productlist}
       </div>
     </div>
  )
}

export default ProductList;