import React from "react";
import FeaturedPlace from "../featuredPlace/FeaturedPlace";
import "./featuredPlaces.css";

const FeaturedPlaces = () => {
  return (
    <div className="places">
      <div className="placesContainer">
        <FeaturedPlace name="Austin, Texas" country="USA" />
        <FeaturedPlace name="Halton Hills, Ontario" country="Canada" />
        <FeaturedPlace name="Shinjuku Golden Gai, Tokyo" country="Japan" />
      </div>
      <button className="showmorea">Show More</button>
    </div>
  );
};

export default FeaturedPlaces;
