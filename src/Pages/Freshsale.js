import Components from '../Components/Filteration/SectionOne/file/Components';
import BestSeler from '../Components/Filteration/FreshSale/BestSeller';
import { useState } from 'react';


function BestSeller(){
    const [filter , setFilter] = useState("All")
    return (
        <div>
            <Components />
            <BestSeler filter={filter} />
        </div>
    );
}


export default BestSeller;