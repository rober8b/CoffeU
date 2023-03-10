import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



const Navigation  = function () {
    return ( 
   <Navbar expand="lg">
    <Container>
    <div className="nav">
     <div className="navbar-container">
     
     <Navbar.Brand>
     <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="logo">
         <img  className="logo-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1671289862/logo__1_-removebg-preview_cxwtbz.png" alt="logo CoffeU"/>
         <h2>CoffeU</h2>
      </div>
      </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto">
         <Link to="/category/HotCoffes">
         <button className="buttons-navbar" >Hot Coffes</button>
         </Link>

         <Link to="/category/IcedCoffes">
         <button className="buttons-navbar">Iced Coffes</button>
         </Link>

        <Link to="/Cart" style={{ textDecoration: 'none' }}>
         <CartWidget />
         </Link>
         
         </Nav>
        </Navbar.Collapse>

          </div>
         </div>
     </Container>
    </Navbar>
    );
}

export default Navigation;