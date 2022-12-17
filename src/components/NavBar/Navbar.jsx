import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";



const Navbar  = function () {
    return ( 
   <header>
    <div className="navbar">
     <div className="navbar-container">
     
     <Link to="/">
      <div className="logo">
         <img  className="logo-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1671289862/logo__1_-removebg-preview_cxwtbz.png" />
         <h2>CoffeU</h2>
      </div>
      </Link>
      
         <Link to="/HotCoffes">
         <button className="buttons-navbar" >Hot Coffes</button>
         </Link>

         <Link to="/IcedCoffes">
         <button className="buttons-navbar">Iced Coffes</button>
         </Link>

         {/* <Link to="/">
         <button className="buttons-navbar" >Pastry Shop</button>
         </Link> */}

         <CartWidget />
         
      </div>
    </div>
    </header>
    );
}

export default Navbar;