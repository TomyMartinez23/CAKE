import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ListProducts from './Components/ListProducts/ListProduct.js';


function App() {

  return (
    <div className="container-cards">
      <Navbar/>
      <ListProducts ></ListProducts>
     
      
    </div>
  );
}

export default App;
