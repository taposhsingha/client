import React from "react";
import "./featuredHotels.css";
import FeaturedHotel from "../featuredHotel/FeaturedHotel";

const FeaturedHotels = () => {
  return (
    <div className="hotels">
      <div className="hotelsContainer">
        <FeaturedHotel
          name="sheraton hotel"
          city="Dhaka"
          country="Bangladesh"
          price="Starting from $2000"
          reviewnums="1100"
          review="5-star"
        />
        <FeaturedHotel
          name="sheraton hotel"
          city="Dhaka"
          country="Bangladesh"
          price="Starting from $2000"
          reviewnums="1100"
          review="5-star"
        />
        <FeaturedHotel
          name="sheraton hotel"
          city="Dhaka"
          country="Bangladesh"
          price="Starting from $2000"
          reviewnums="1100"
          review="5-star"
        />
      </div>
      <div className="learnmore">
        <button className="showmore">Show More</button>
      </div>
    </div>
  );
};

export default FeaturedHotels;
