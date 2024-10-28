import { Link } from "react-router-dom";
import "./Components.css";

function Components() {
  return (
    <>
      <div className="Sectionone">
        <div className="container">
          <div className="banner">
            <div className="overlay">
              <h1 className="food">Products</h1>
              <p>Discover new and trending products in our top categories.</p>
            </div>
          </div>
        </div>

        <div className="photo">
          <div className="container">
            <h1 className="offer">Offer</h1>
            <div className="bg">
              <div className="overlay">
                <h1 className="text">
                  Get a 30% discount on your order when you order more than 5
                  kilos
                </h1>
                <button>
                  {" "}
                  <Link to={"/filteration"} className="explore">
                    Explore Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Components;
