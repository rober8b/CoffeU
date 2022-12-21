import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetialContainer/ItemDetailContainer";


const App = function () {

    return (
    <div className="App">
        <Navigation />
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </main>

        <Footer />
    </div>
    );
}

export default App;

