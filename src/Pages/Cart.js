import ProductPage from '../Components/ProductPage/ProductPage';
import Dashboard from '../Components/Dashboard/Dashboard';
import ProductGrid from '../Components/ProductGrid/ProductGrid';
  
 

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