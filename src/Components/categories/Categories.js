import React, { useEffect, useState } from "react";
import productsData from "./data.js";
import "./categories.css";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="category">
      <div className="containers">
        <div className="NewCategory">
          <h1 className=""> Product </h1>
          <button onClick={handleShowAll} className="show-all-button">
            {showAll ? "Show Less" : "Show All Products"}
          </button>
        </div>
        <div className="row">
          {products.slice(0, showAll ? products.length : 6).map((product) => (
            <div key={product.id} className="collection">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
