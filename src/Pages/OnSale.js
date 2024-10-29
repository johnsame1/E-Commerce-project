import Components from '../Components/Filteration/SectionOne/file/Components';
import ProductList from '../Components/Filteration/categories/OnSale';
import { useState } from 'react';


function OnSale(){
const [filter,setFilter] = useState("All")
    return (
        <div>
            <Components />
            <ProductList filter={filter}/>
        </div>
    );
}


export default OnSale;