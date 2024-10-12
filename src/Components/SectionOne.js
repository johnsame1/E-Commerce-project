import "./sectionOne.css";
import product from "../assyts/img/bag.png";
import data from ".../data";
import { useState } from "react";

function sectionOne() {

  const [products, setProducts] = useState([]);
  const getProductsByCategory = (category) => {
    fetch('/products.json') // Assuming products.json is in the public directory
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        // Filter products by the specified category
        const filteredProducts = data.filter(product => product.category === category);
        setProducts(filteredProducts); // Assuming setProducts is a state setter function
      })
      .catch((error) => console.error('Error fetching the JSON file:', error));
  };
  
  // Example usage
  getProductsByCategory('Electronics');
  







  return (
    <>
      <div className="SectionOne">
        <div className="container">
          <div className="banner">
            <div className="overlay">
              <h1 className="food">Products</h1>
              <p>
                DiscoverHere’s an example of all the sub-components included in
                a responsive light-themed navbar that automatically collapses at
                the lg (large) breakpoint. new and trending products
              </p>
            </div>
          </div>
        </div>

        <div className="product">
          <div className="container">
            <p className="Top_categories">Top categories</p>
            <li className="lists">
              <div className="singleProduct">
                <img src={product} alt="description product" />
                <p className="pasta">pasta</p>
              </div>
              <div className="singleProduct">
                <img src={product} alt="description product" />
                <p className="pasta">pasta</p>
              </div>
              <div className="singleProduct">
                <img src={product} alt="description product" />
                <p className="pasta">pasta</p>
              </div>
              <div className="singleProduct">
                <img src={product} alt="description product" />
                <p className="pasta">pasta</p>
              </div>
              <div className="singleProduct">
                <img src={product} alt="description product" />
                <p className="pasta">pasta</p>
              </div>
              <div className="singleProduct">
                <img src={product} alt="description product" />
                <p className="pasta">pasta</p>
              </div>
              <div className="singleProduct">
                <img src={product} alt="description product" />
                <p className="pasta">pasta</p>
              </div>
            </li>
          </div>
        </div>
      </div>

      <div className="photo">
        <div className="container">
          <h1 className="offer">offer</h1>
          <div className="bg">
            <div className="overlay">
              <h1 className="text">
                Get a 30% discount on your order when you order more than 5
                kilos
              </h1>
              <button className="explore">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default sectionOne;
