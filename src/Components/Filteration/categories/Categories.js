import React, { useEffect, useState } from "react";
import "./categories.css";
import image from './product.jpg';

function ProductList({ filter }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        filterProducts(data, filter);
      });
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
  }, [filter]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="category">
      <div className="containers">
        <div className="NewCategory">
          <h1>On Sale</h1>
          <button onClick={toggleShowAll}>
            {showAll ? "Show Less" : "Show All Products"}
          </button>
        </div>
        <div className="row">
          {filteredProducts.slice(0, showAll ? filteredProducts.length : 6).map((product) => (
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

export default ProductList;
