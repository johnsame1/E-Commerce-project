import { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from '../../../images/test.jpeg'
import img2 from '../../../images/test2.jpg'
import img3 from '../../../images/test3.jpg'
import './sectionfour.css';

function SectionFour() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getProducts();


    }, []);
    return (
        <>
            <div className="sectionfour">
                <div className="container">
                    <div className="data">
                        <h2>Best Seller</h2>
                        <button>See All <FaLongArrowAltRight /></button>
                    </div>
                    <div className="products">
                        {products.map((info) => {
                            return (
                                <>
                                    <div className="card" key={info.id}>
                                        <img src={img1} alt="..." />
                                        <div className="card-data">
                                            <p>{info.category}</p>
                                            <h4>{info.price}$</h4>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>

            </div>
            <div className="sectionfour">
                <div className="container">
                    <div className="data">
                        <h2>On Sale</h2>
                        <button>See All <FaLongArrowAltRight /></button>
                    </div>
                    <div className="products">
                        {products.map((info) => {
                            return (
                                <>
                                    <div className="card" key={info.id}>
                                        <img src={img2} alt="..." />
                                        <div className="card-data">
                                            <p>{info.category}</p>
                                            <h4>{info.price}$</h4>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="sectionfour">
                <div className="container">
                    <div className="data">
                        <h2>NEW Arrived</h2>
                        <button>See All <FaLongArrowAltRight /></button>
                    </div>
                    <div className="products">
                        {products.map((info) => {
                            return (
                                <>
                                    <div className="card" key={info.id}>
                                        <img src={img3} alt="..." />
                                        <div className="card-data">
                                            <p>{info.category}</p>
                                            <h4>{info.price}$</h4>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>

            </div>
        </>
    );
}

export default SectionFour;