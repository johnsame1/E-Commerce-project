import SectionOne from '../Components/Filteration/SectionOne/file/SectionOne';
import ProductList from '../Components/Filteration/categories/OnSale';
import NewCategory from '../Components/Filteration/NewCategory/NewCategory';
import BestSeler from '../Components/Filteration/FreshSale/BestSeller';
import { useState } from 'react';


function Filteration(){
    const [filter , setFilter] = useState("All")
    console.log(filter)
    return (
        <div>

            <SectionOne setFilter={setFilter} />
            <ProductList filter={filter}/>
            <NewCategory  filter={filter} />
            <BestSeler filter={filter} />
        </div>
    );
}


export default Filteration;