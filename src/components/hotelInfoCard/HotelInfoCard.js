import React from "react";
import "./hotelInfoCard.css";
import img from "./img.jpg";
const HotelInfoCard = () => {
  return (
    <div className="hotel-info-card">
      <div className="hotel-card-wrapper">
        <img src={img} alt="img" className="hotel-card-img" />
        <div className="hotel-card-text">
          <div className="hotel-card-name">
            <h2>Millennium Mitsui Garden Hotel Tokyo</h2>
          </div>
          <div className="hotel-rating-card">
            <h2>3-star hotel</h2>
            <p>1100 ratings</p>
          </div>
          <div className="hotel-card-reception">
            <h2>Popular</h2>
            <p>5-star excellent</p>
          </div>
          <div className="hotel-card-price">
            <h2>Starting from $319</h2>
          </div>
          <div className="hotel-card-features">
            <h2>Hotel Features:</h2>
            <p>Free Wifi</p>
            <p>Restaurant</p>
            <p>Special Offer</p>
          </div>
          <button className="view-hotel-deal">View Deal</button>
        </div>
      </div>
    </div>
  );
};

export default HotelInfoCard;
