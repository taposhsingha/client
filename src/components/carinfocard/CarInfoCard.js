import React from "react";
import "./carinfocard.css";
import img from "./car.jpg";

const CarInfoCard = () => {
  return (
    <div className="car-info-card">
      <div className="car-info-card-wrapper">
        <img src={img} alt="car-card-img" />
        <div className="car-card-text">
          <div className="car-card-name">
            <h2>Hyundai I20</h2>
            <p>$599</p>
          </div>
          <div className="car-card-review">
            <h2>7.89 | 113 reviews</h2>
          </div>
          <div className="car-card-features">
            <h2>Car features: </h2>
            <p>5 seats</p>
            <p>Manual</p>
            <p>Unlimited mileage</p>
          </div>
          <button className="view-car-deal">View deal</button>
        </div>
      </div>
    </div>
  );
};

export default CarInfoCard;
