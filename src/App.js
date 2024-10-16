import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filteration from './Pages/Filteration';
import NewCategory from './Pages/NewCategory';
import FreshSale from './Pages/Freshsale';
import OnSale from './Pages/OnSale';

import Home from './Pages/Home';
import Cart from './Pages/Cart'

import './App.css';
import Navbar from './Components/NavBar/Navbar';

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

        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </Router>
  );
}

export default App;
