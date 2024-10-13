import SectionOne from '../Components/Filteration/SectionOne/file/SectionOne';
import ProductList from '../Components/Filteration/categories/Categories';
import NewCategory from '../Components/Filteration/NewCategory/NewCategory';
import FreshSale from '../Components/Filteration/FreshSale/FreshSale';


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