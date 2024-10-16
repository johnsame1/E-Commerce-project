import SectionOne from '../Components/Filteration/SectionOne/file/SectionOne';
import ProductList from '../Components/Filteration/categories/Categories';
import NewCategory from '../Components/Filteration/NewCategory/NewCategory';
import FreshSale from '../Components/Filteration/FreshSale/FreshSale';
import { useState } from 'react';


function Filteration(){
    const [filter , setFilter] = useState("All")
    console.log(filter)
    return (
        <div>

            <SectionOne setFilter={setFilter} />
            <ProductList filter={filter}/>
            <NewCategory  filter={filter} />
            <FreshSale filter={filter} />
        </div>
    );
}


export default Filteration;