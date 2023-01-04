import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetialContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";


const App = function () {

    return (
    <div className="App">
        <CartProvider>
        <Navigation />
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </main>
        </CartProvider>
        <Footer />
    </div>
    );
}

export default App;

