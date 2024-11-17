
import './App.css';
import pharmacyImage from './image.jpg';
// import firstProduct from './BZBTSLOBIO77092_1.webp';
// import secondProduct from './31+tj+uVB+L._UL500_.jpg';
// import thirdProduct from './sunscreen.jpg';
// import fourthProduct from './cream.webp';
import ProductItem from './Components/ProductItem';
function App() {
 
//   const products =[
//   {
//     image : firstProduct,
//     name: "bioderma face washer",
//     price:"12Kd",
//   },
//   {
//     image : secondProduct,
//     name:"makeup remover",
//     price:"4kd",
//   },
//   {
//     image:thirdProduct,
//     name:"Protection Face Sunscreen",
//     price:"6kd",
//   },
//   {
//     image: fourthProduct,
//     name:"QV cream",
//     price:"7.5kd",
//  },
// ];


// const productsList = products.map((product, index) => {
//   return( <div key = {index}>
//     <div className="text-container">
//     <img className="product-image"src={product.image}></img>
//     <p className="product-info">{product.name}</p>
//     <p className="product-info">{product.price}</p>
//     </div>
//  </div>)

// })

  return (
    <div className = "App" >
    
<div className ="text-container">
  <div className="App-link">
<h1>Kholoud Pharmacy</h1>
  <p>feel good inside, look good outside</p>

</div>
  <img className = "storeImage" src={pharmacyImage}></img>
</div>

<div className = "row" >
{/* {productsList} */}
<ProductItem/>
</div>
</div>

 );
}


export default App;