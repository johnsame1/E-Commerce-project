
import React, { useState, useEffect } from "react";
import axiosInstance from '../../axios/Axios';
import { Link, useParams } from "react-router-dom";
import "./ProductPage.css";
import Picture1 from "../../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp";

function ProductPage({ addToCart }) {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

   useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/product/${id}`);
        setProduct(response.data.data);  
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

   const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  
   const handleAddToCart = async () => {
    try {
      const cartPayload = {
        count: quantity,
      };
      const response = await axiosInstance.post(`/cart`, cartPayload , );
      console.log("Product added to cart:", response.data);
      addToCart(cartPayload);  
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

   if (!product) return <p>Loading product details...</p>;

  return ( <>
    <div className="product-page">
      <div className="product-gallery">
        <div className="gallery-thumbnails">
          {product.images && product.images.length > 0 ? (
            product.images.map((img, index) => (
              <img
                key={index}
                className="thumbnail"
                src={img.url}
                alt={`Product Thumbnail ${index + 1}`}
              />
            ))
          ) : (
            <img className="thumbnail" src={Picture1} alt="Default Thumbnail" />
          )}
        </div>
      </div>

      <div className="product-main">
        <img
          className="main-image"
          src={product.images && product.images[0] ? product.images[0].url : Picture1}
          alt="Product Main"
        />
      </div>

      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>

        <div className="availability">
          <span>{product.available ? "Available" : "Out of Stock"}</span>
        </div>

        <div className="quantity-controls">
          <span onClick={increaseQuantity} className="quantity-button">+</span>
          <span className="num">{quantity}</span>
          <span onClick={decreaseQuantity} className="quantity-button">-</span>
        </div>

        <div className="product-price">
          {(product.price * quantity).toFixed(2)} $
        </div>

        <div className="action-buttons">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="add-to-favorite">Add to Favorite</button>
          <Link to={"/Viewcart"}>
            <button className="view-cart">View Cart</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="dashboard">
    <div className="tabs">
    
      <tr>Details Product</tr>
      <td>Customer Reviews</td>
      
    </div>
    <table className="product-details">
      <tbody>
        <tr>
          <td>Product Title</td>
          <td>Plastic bag</td>
        </tr>
        <tr>
          <td>Seller</td>
          <td>Kevin Smile</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>24 g</td>
        </tr>
        <tr>
          <td>Brand</td>
          <td>Lorem Ibsem</td>
        </tr>
        <tr>
          <td>Color</td>
          <td>Gray</td>
        </tr>
        <tr>
          <td>The Shape</td>
          <td>Square</td>
        </tr>
        <tr>
          <td>Special Features</td>
          <td>WePress Inc.</td>
        </tr>
        <tr>
          <td>Tags</td>
          <td className="tags">
        <span className="tag">Bags</span>
        <span className="tag">Plastic</span>
        <span className="tag">Storage</span>
        <span className="tag">Biography</span>
        <span className="tag">Trending2020</span>
        <span className="tag">Bestseller</span>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
  </>
  );
}

export default ProductPage;
