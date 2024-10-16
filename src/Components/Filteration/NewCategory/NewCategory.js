import React, { useEffect, useState } from "react";
import image from "./product.jpg";
import "../categories/categories.css";
function NewCategory({ filter }) {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {setProducts(data)
        ;setFilteredProducts(data, filter);});
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
  }, [filter, products]);


  const show = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="category">
      <div className="containers">
        <div className="NewCategory">
          <h1 className=""> New </h1>
          <button onClick={show}>
            {showAll ? "Show Less" : "Show All Products"}
          </button>
        </div>
        <div className="row">
          {filteredProducts.slice(0, showAll ? filteredProducts.length : 6)
          .map((product) => (
            <div key={product.id} className="collection">
              <img src={image} alt={product.name} />
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
