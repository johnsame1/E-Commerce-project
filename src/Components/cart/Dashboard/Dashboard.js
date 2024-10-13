import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="tabs">
        <h2 className="active-tab">Details Product</h2>
        <h2>Customer Reviews</h2>
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
            <td>
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
  );
};

export default Dashboard;
