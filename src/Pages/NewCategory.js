import Components from '../Components/Filteration/SectionOne/file/Components';
import Newcategory from '../Components/Filteration/NewCategory/NewCategory';
import { useState } from 'react';


function NewCategory(){
    const [filter , setFilter] = useState("All")

    return (
        <div>
            <Components />
            <Newcategory  filter={filter} />
        </div>
    );
}


export default NewCategory;