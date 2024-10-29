import React, { useEffect, useState } from "react";
import "../categories/categories.css";
import axiosInstance from "../../axios/Axios";
function NewCategory({ filter }) {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
 
const getProducts = async()=>{

  try {
    const {data} = await axiosInstance.get("/product?category=shirt");
    setProducts(data.data.products);
    console.log('setProducts', data.data)
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
} 


  useEffect(() => {
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
          <h1>New Arrived</h1>
          <button onClick={toggleShowAll}>
            {showAll ? "Show Less" : "Show All Products"}
          </button>
        </div>
        <div className="row">
          {filteredProducts.slice(0 , showAll ? filteredProducts.length:3)
          .map((product) => (
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

export default NewCategory;
