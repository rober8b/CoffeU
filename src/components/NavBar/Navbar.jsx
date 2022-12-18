import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";



const Navigation  = function () {
    return ( 
   <Navbar expand="lg">
    <Container>
    <div className="nav">
     <div className="navbar-container">
     
     <Navbar.Brand>
     <Link to="/">
      <div className="logo">
         <img  className="logo-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1671289862/logo__1_-removebg-preview_cxwtbz.png" />
         <h2>CoffeU</h2>
      </div>
      </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto">
         <Link to="/HotCoffes">
         <button className="buttons-navbar" >Hot Coffes</button>
         </Link>

         <Link to="/IcedCoffes">
         <button className="buttons-navbar">Iced Coffes</button>
         </Link>

         <CartWidget />
         
         </Nav>
        </Navbar.Collapse>

          </div>
         </div>
     </Container>
    </Navbar>
    );
}

export default Navigation;