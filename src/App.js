
import './App.css';
import bookImage from './image.jpg';
import firstProduct from './BZBTSLOBIO77092_1.webp';
import secondProduct from './31+tj+uVB+L._UL500_.jpg';
import thirdProduct from './sunscreen.jpg';
import fourthProduct from './cream.webp';
function App() {
  const products =[
  {
    image : firstProduct,
    name: "bioderma face washer",
    price:"12Kd",
  },
  {
    image : secondProduct,
    name:"makeup remover",
    price:"4kd",
  },
  {
    image:thirdProduct,
    name:"Protection Face Sunscreen",
    price:"6kd",
  },
  {
    image: fourthProduct,
    name:"QV cream",
    price:"7,500kd",
 },
];

return (
    <div className = "App" >
    
<div className ="text-container">
  <div className="App-link">
<h1>Kholoud Pharmacy</h1>
  <p>feel good inside, look good outside</p>

  </div>
  <img className = "storeImage" src = {bookImage}></img>
</div>


<div class="row">

<div class="product-container">
<img class="product-image" src={products[0].image} ></img>
<p class="product-info">{products[0].name}</p>
<p class="product-info">{products[0].price}</p>
</div>

<div class="product-container">
<img class="product-image" src={products[1].image} ></img>
<p class="product-info">{products[1].name}</p>
<p class="product-info">{products[1].price}</p>
</div>


<div class="product-container">
<img class="product-image" src={products[2].image} ></img>
<p class="product-info">{products[2].name}</p>
<p class="product-info">{products[2].price}</p>
</div>


<div class="product-container">
<img class="product-image" src={products[3].image} ></img>
<p class="product-info">{products[3].name}</p>
<p class="product-info">{products[3].price}</p>
</div>

</div>     
</div> 

  );
}


export default App
