import React, { useState } from 'react';
import './ViewCart.css';
import image from '../../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp'
const ViewCart = () => {
   const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Plastic bag for storage',
      price: 12.0,
      quantity: 1,
      imageUrl: '../../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp', 
    },
    {
      id: 2,
      name: 'Plastic bag for storage',
      price: 12.0,
      quantity: 1,
      imageUrl: '../../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp', 
    },
    {
      id: 3,
      name: 'Plastic bag for storage',
      price: 12.0,
      quantity: 1,
      imageUrl: '../../../assets/2024-09-13T21-19-06.411Zimage (2)777 (1).webp', 
    },
  ]);

   const increaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

   const removeItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;  
  const total = subtotal - discount;

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={image} alt={product.name} />
          <div className="item-details"> 
            <div className='details'>
            <h4>{product.name}</h4>
            <div className="stock">
            <p>16 pieces</p>
            <span className="stock-status">In stock</span>
            </div>
            <div className="quantity-control">
              <button onClick={() => decreaseQuantity(product)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => increaseQuantity(product)}>+</button>
            </div>
            </div>
            <div className='controllers'>
             <div className="price"><p>{(product.price * product.quantity).toFixed(2)} $</p></div>
             <div className="con">
            <button className="save-btn">Save</button>
            <button className="delete-btn" onClick={() => removeItem(product.id)}>Delete</button>
            </div>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <p>Subtotal: {subtotal.toFixed(2)} $</p>
        <p>Discount: {discount.toFixed(2)} $</p>
        <p>Delivery: 0.00 $</p>
        <p>Tax: 0.00 $</p>
        <h3>Total: {total.toFixed(2)} $</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default ViewCart;
