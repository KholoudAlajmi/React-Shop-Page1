import "./App.css";
import pharmacyImage from "./image.jpg";
import Productlist from "./Components/ProductList";

function App() {
  return (
    <div className="App">
      <div className="text-container">
        <div className="App-link">
          <h1>Kholoud Pharmacy</h1>
          <p>feel good inside, look good outside</p>
        </div>
        <img className="storeImage" src={pharmacyImage}></img>
      </div>

      <Productlist />
    </div>
  );
}

export default App;
