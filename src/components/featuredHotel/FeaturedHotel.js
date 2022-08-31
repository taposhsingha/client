import React from "react";
import "./featuredHotel.css";
import img from "./img.jpg";
const FeaturedHotel = (props) => {
  return (
    <div className="hotels">
      <div className="hotel">
        <img src={img} alt="img" className="hotel-img" />
        <div className="hotel-text">
          <h1>{props.name}</h1>
          <div className="learn">
            <p>{props.city}</p>
            <button>Learn more</button>
          </div>
          <div className="review">
            <p>{props.country}</p>
            <p>{props.reviewnums} reviews</p>
          </div>
          <div className="price">
            <p>{props.price}</p>
            <p>{props.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotel;
