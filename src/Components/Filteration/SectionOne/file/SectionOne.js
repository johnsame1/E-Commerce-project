import { useState, useEffect } from "react";
import "./sectionOne.css";
import image from "../assyts/img/bag.png";
import axiosInstance from "../../../axios/Axios"; // Import the axios instance with default config

function SectionOne({ setFilter }) {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axiosInstance.get("/category"); // No need to specify full URL
      setCategories(data.data.categories);
       // Set the categories state with the fetched data
       console.log(data.data.categories); 
      console.log( categories );
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  useEffect(() => {
    getCategories(); // Fetch categories when the component mounts
  }, []);

  return (
    <>
      <div className="SectionOne">
        <div className="container">
          <div className="banner">
            <div className="overlay">
              <h1 className="food">Products</h1>
              <p>Discover new and trending products in our top categories.</p>
            </div>
          </div>
        </div>

        <div className="product">
          <div className="container">
            <p className="Top_categories">Top Categories</p>
            <ul className="lists">
              <li key="all">
                <img src={image} alt="All Categories" />
                <button onClick={() => setFilter("All")}>All</button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button onClick={() => setFilter(category.name)}>
                    <img src={image} alt={category.name} />
                    <h3>{category.name}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="photo">
        <div className="container">
          <h1 className="offer">Offer</h1>
          <div className="bg">
            <div className="overlay">
              <h1 className="text">
                Get a 30% discount on your order when you order more than 5 kilos
              </h1>
              <button className="explore">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
