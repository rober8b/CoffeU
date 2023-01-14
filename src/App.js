import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetialContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";


const App = function () {
    return (
    <div className="App">
        <CartProvider>
        <Navigation />
        <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/category/:category" element={<ItemListContainer />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/form" element={<Form />} />
              <Route path="/Error404" element={<Error404 />} />
              <Route path="*" element={<Navigate to="/Error404"/>} />
            </Routes>
        </main>
        </CartProvider>
        <Footer />
    </div>
    );
}

export default App;

