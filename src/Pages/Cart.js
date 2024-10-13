import ProductPage from '../Components/cart/ProductPage/ProductPage.jsx';
import Dashboard from '../Components/cart/Dashboard/Dashboard.js';
import ProductGrid from '../Components/cart/ProductGrid/ProductGrid.jsx';
  
 

function Home() {
  return (
    <>
       <ProductPage />
        <Dashboard/>
        <ProductGrid/>
     </>
  );
}

export default Home;