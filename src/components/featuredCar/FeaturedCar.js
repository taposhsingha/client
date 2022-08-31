import React from "react";
import "./featuredCar.css";
import img from "./img.jpg";

const FeaturedCar = () => {
  return (
    <div className="cars">
      <div className="car">
        <img src={img} alt="car" className="car-img" />
        <div className="car-text">
          <div className="car-detail">
            <h2>Hyundai l20</h2>
            <p>5 seats</p>
          </div>
          <div className="car-place">
            <h2>Keflavik International Airport</h2>
            <p>Reykjavik</p>
          </div>
          <div className="car-company">
            <h2>Alamo</h2>
            <p>Free cancellation</p>
          </div>

          <div className="car-price">
            <p>3 days</p>
            <h2>starting from $599.99</h2>
          </div>
          <button className="car-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCar;
