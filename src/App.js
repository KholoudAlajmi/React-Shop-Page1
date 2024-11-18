
import './App.css';
import pharmacyImage from './image.jpg';
import ProductList from './Components/ProductList';


function App() {
// const productsList = products.map((product, index) => {
//   return( <div key = {index}>
//     <div className="text-container">
//     <img className="product-image"src={product.image}></img>
//     <p className="product-info">{product.name}</p>
//     <p className="product-info">{product.price}</p>
//     </div>
//  </div>)

// })
//   const Productlist = products.map((product, index) => {
// return <ProductItem/>;
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
        <ProductList/>
        <ProductList/>
       </div> 
    </div>

 );
}


export default App;