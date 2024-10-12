import React from 'react';
import Picture1 from "../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp";
 
import './ProductGrid.css';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Plastic bag for storage', price: 12, minOrder: '1 kilo' },
    { id: 2, name: 'Plastic bag for storage', price: 12, minOrder: '1 kilo' },
    { id: 3, name: 'Plastic bag for storage', price: 12, minOrder: '1 kilo' },
  ];

  return (
    <div className="product-grid">
      <div className="product-title">
      <h2>You may like it</h2>
      <a href="#see-all" className="see-all-link">See all 
        
       </a>
      </div>
       
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={Picture1}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>Minimum order quantity: {product.minOrder}</p>
            <p className="product-price">{product.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
