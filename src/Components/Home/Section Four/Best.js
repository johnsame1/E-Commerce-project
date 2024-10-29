import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios/Axios';
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import './sectionfour.css';
function Best({filter , title}) {
    const [bestSeller, setbestSeller] = useState([]);

    const getBestSeller = async () => {
        try {
            const { data } = await axiosInstance.get(`/product?${filter}=1`);
            setbestSeller(data.data.products);

        } catch (err) {
            console.log(err);

        };
    }
    useEffect(() => {
        getBestSeller();
    }, [])
    return (

        <div className="container">

            <div className="data">
                <h2>{title}</h2>
                <Link to={"/filteration/BestSeller"}>
                    <button>
                        See All <FaLongArrowAltRight />
                    </button>
                </Link>
            </div>
            <div className="products">
                {bestSeller.map((info) => {
                    return (      
                        <>
                            <Link to={"/Cart"}>
                                <div className="card" key={info.id}>
                                    <img src={info.image[0].url} alt='/' />
                                    <div className="card-data">
                                        <p>{info.category}</p>
                                        <h4>{info.price}</h4>
                                    </div>
                                </div>
                            </Link>
                        </>
                    );
                })}
            </div>
        </div>

    )
}


export default Best
