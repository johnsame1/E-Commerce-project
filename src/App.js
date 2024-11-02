import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Filteration from "./Pages/Filteration";
import NewCategory from "./Pages/NewCategory";
import FreshSale from "./Pages/Freshsale";
import OnSale from "./Pages/OnSale";
import Sign from "./Components/Login/Sign.jsx";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import ViewCart from "./Pages/ViewCart";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filteration" element={<Filteration />} />
        <Route path="/filteration/NewSeller" element={<NewCategory />} />
        <Route path="/filteration/Onsale" element={<OnSale />} />
        <Route path="/filteration/BestSeller" element={<FreshSale />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/Cart/:id" element={<Cart />} />
        <Route path="/Viewcart" element={<ViewCart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
