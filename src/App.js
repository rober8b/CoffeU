import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/Pages/ItemDetail/ItemDetail";
import Navigation from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";

import data from "./data.json";



const App = function () {
    const { HotCoffes, IcedCoffes } = data;
    return (
    <div className="App">
        <Navigation />
        <main>
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/HotCoffes" element={<ItemListContainer list={HotCoffes} />} />
              <Route path="/HotCoffes/:title" element={<ItemDetail data={data} />} />
              <Route path="/IcedCoffes" element={<ItemListContainer list={IcedCoffes} />} />
              <Route path="/IcedCoffes/:title" element={<ItemDetail data={data} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>

        <Footer />
    </div>
    );
}

export default App;

{/* <HomeContainer greeting={"Enjoy The Taste!"}/>
     <ItemListContainer />
     <Footer /> */}