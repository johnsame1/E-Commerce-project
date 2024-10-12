import SectionOne from '../Components/SectionOne/file/SectionOne';
import ProductList from '../Components/categories/Categories';
import NewCategory from '../Components/NewCategory/NewCategory';
import FreshSale from '../Components//FreshSale/FreshSale';


function Home(){
    return (
        <div>

            <SectionOne />
            <ProductList />
            <NewCategory />
            <FreshSale />
        </div>
    );
}


export default Home;