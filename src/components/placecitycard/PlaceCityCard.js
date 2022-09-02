import React from "react";
import "./placecitycard.css";
import img from "./img.jpg";

const PlaceCityCard = (props) => {
  return (
    <div>
      <div className="place-city-card">
        <img src={img} alt="img" className="place-card-img" />
        <div className="place-city-card-text">
          <h1>{props.name}</h1>
          <div className="learng">
            <p>{props.country}</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCityCard;
