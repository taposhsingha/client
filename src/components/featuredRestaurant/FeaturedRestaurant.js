import React from "react";
import "./featuredRestaurant.css";
import img from "./img.jpg";

const FeaturedRestaurant = () => {
  return (
    <div className="rest">
      <div className="rest-wrapper">
        <img src={img} alt="rest" className="rest-img" />
        <div className="rest-text">
          <div className="rest-name">
            <h2>The Mary Lane</h2>
            <p>Dining bar</p>
          </div>
          <div className="rest-place">
            <h2>New York City</h2>
            <p>USA</p>
          </div>
          <div className="rest-delivery">
            <h2>Delivery Avaliable</h2>
            <p>5-star</p>
          </div>
          <div className="rest-open">
            <h2>open from 10-a.m. to 10-p.m.</h2>
            <p>1100 reviews</p>
          </div>
          <button className="learnmored">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRestaurant;
