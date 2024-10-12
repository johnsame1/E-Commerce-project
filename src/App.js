import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filteration from './Pages/Filteration';
import Home from './Pages/Home';

import './App.css';
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filteration" element={<Filteration />} />
      </Routes>
    </Router>
  );
}

export default App;
