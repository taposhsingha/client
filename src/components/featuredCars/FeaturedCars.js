import React from "react";
import "./featuredCars.css";
import FeaturedCar from "../featuredCar/FeaturedCar";

const FeaturedCars = () => {
  return (
    <div className="cars">
      <div className="carsContainer">
        <FeaturedCar />
        <FeaturedCar />
        <FeaturedCar />
      </div>
      <button className="showmorec">Show More</button>
    </div>
  );
};

export default FeaturedCars;
