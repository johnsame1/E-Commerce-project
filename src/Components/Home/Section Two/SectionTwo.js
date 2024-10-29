import { Link } from 'react-router-dom';
import './sectiontwo.css';
import { AiOutlineProduct } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axiosInstance from '../../axios/Axios';

function SectionTwo() {
    const [category, setcategories] = useState([]);

    const getcategory = async () => {
        try {
            const {data} = await axiosInstance.get("/category?CATEGORIES_PER_PAGE=12");
            setcategories(data.data.categories);
            console.log(data.data.categories);

        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getcategory();
    }, [])
    return (<>
    <div className="sectiontwo">
        <div className="container">
            <h1>Explore millions of offers tailored to your company's needs</h1>
            <div className="data">
                {category.map((data) => {
                    return (
                        <div className="buttons">
                            <Link to={'/filteration'} ><button key={data._id}><AiOutlineProduct style={{ color: '#ff820e', width: '30px', height: '30px' }} /><br />{data.name}</button></Link>

                        </div>
                    );
                })
                } 

        </div>
    </div></div>

    </>  );
}

export default SectionTwo;