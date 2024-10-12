import React, { useState } from "react";
import Picture1 from "../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp";
import Picture2 from "../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp";
import Picture3 from "../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp";
import Picture4 from "../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp";
import "./ProductPage.css";

const ProductPage = () => {
   const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 12.00;

   const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

   const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-page">
      <div className="product-gallery">
         <div className="gallery-thumbnails">
          <img
            className="thumbnail active"
            src={Picture1}

            alt="Product Thumbnail 1"
          />
          <img
            className="thumbnail"
            src={Picture2}
            alt="Product Thumbnail 2"
          />
          <img
            className="thumbnail"
            src={Picture3}
            alt="Product Thumbnail 3"
          />
        </div>
       </div>

      <div className="product-main">
        <img
          className="main-image"
          src={Picture4}
          alt="Product Main"
        />
      </div>

      <div className="product-details">
        <h1 className="product-title">Plastic bag for storage</h1>
        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sint aperiam fugiat nam, eius commodi veniam exercitationem rem id dicta.
         </p>

        <div className="availability">
          <span>Available</span>
          </div>

          <div className="quantity-controls">
            <span onClick={increaseQuantity} className="quantity-button">+</span>
            <span className= "num">{quantity}</span>
            <span onClick={decreaseQuantity} className="quantity-button">-</span>
          </div>
 
        <div className="product-price">
          {(pricePerUnit * quantity).toFixed(2)} $
        </div>

        <div className="action-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="add-to-favorite">Add to Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
