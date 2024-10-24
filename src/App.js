import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filteration from './Pages/Filteration';
import NewCategory from './Pages/NewCategory';
import FreshSale from './Pages/Freshsale';
import OnSale from './Pages/OnSale';

import Home from './Pages/Home';
import Cart from './Pages/Cart'

import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ViewCart from './Pages/ViewCart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filteration" element={<Filteration />}/>
        <Route path='/filteration/NewSeller' element ={<NewCategory/>}/>
        <Route path='/filteration/FrechSeller' element ={<OnSale/>}/>
        <Route path='/filteration/BestSeller' element ={<FreshSale/>}/>

        <Route path="/Cart" element={<Cart />} />
        <Route path="/Viewcart" element={<ViewCart />} />
      </Routes>
      
    </Router>
  );
}

export default App;
