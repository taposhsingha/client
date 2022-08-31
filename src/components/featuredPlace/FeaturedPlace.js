import React from "react";
import "./featuredPlace.css";
import img from "./img.jpg";

const FeaturedPlace = (props) => {
  return (
    <div className="places">
      <div className="place">
        <img src={img} alt="img" className="place-img" />
        <div className="place-text">
          <h1>{props.name}</h1>
          <div className="learn">
            <p>{props.country}</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlace;
