import React from "react";
import "./featuredRestaurants.css";
import FeaturedRestaurant from "../featuredRestaurant/FeaturedRestaurant";

const FeaturedRestaurants = () => {
  return (
    <div className="rests">
      <div className="restContainer">
        <FeaturedRestaurant />
        <FeaturedRestaurant />
        <FeaturedRestaurant />
      </div>
      <button className="showmoree">Show More</button>
    </div>
  );
};

export default FeaturedRestaurants;
