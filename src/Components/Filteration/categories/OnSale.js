import React, { useEffect, useState } from "react";
import "./categories.css";
import axiosInstance from "../../axios/Axios"; 
import { Link } from "react-router-dom";

function ProductList({ filter }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

const getProducts = async()=>{

  try {
    const config ={ 
      headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGM4ZDNhZTQ0YmQ1YjAzZTFmNzFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMDIwMTI2Mn0.nLJWAgAA_bf8UzJopx0otMVQMLJZYAu5u1Fy7ALqA2o` 
    }}
    const {data} = await axiosInstance.get("/product?onSales=1",config);
    setProducts(data.data.products);
    console.log('setProducts', data.data.products)
  } catch (error) { 
    console.error("Error fetching products: ", error);
  }
} 


  useEffect(() => {
    // fetch("/product?onSales=1")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProducts(data);
    //     filterProducts(data, filter);
    //   });
    getProducts()
  }, []); 

  const filterProducts = (products, filter) => {
    if (filter === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === filter));
    }
  };

  useEffect(() => {
    filterProducts(products, filter);
  }, [products,filter]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };


  return (
    <div className="category">
      <div className="containers">
        <div className="NewCategory">
          <h1>On Sale</h1>
          <Link to ={"/filteration/Onsale"} onClick={toggleShowAll}>
            {showAll ? "Show Less" : "Show All Products"}
          </Link>
        </div>
        <div className="row">
          {filteredProducts.slice(0 , showAll ? filteredProducts.length:3).map((product) => (
            <div key={product.id} className="collection">
              <img src={`${product.image[0].url}`}alt={product.name}/>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
