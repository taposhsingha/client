import React from "react";
import Navbar from "../../components/navbar/Navbar";
import PlaceCityCard from "../../components/placecitycard/PlaceCityCard";
import SearchPlaceIntro from "../../components/searchplaceintro/SearchPlaceIntro";
import FeaturedHotel from "../../components/featuredHotel/FeaturedHotel";
import FeaturedRestaurant from "../../components/featuredRestaurant/FeaturedRestaurant";
import FeaturedCar from "../../components/featuredCar/FeaturedCar";
import "./placeslist.css";

const PlacesList = () => {
  return (
    <div className="place-header">
      <div className="middle-place-section">
        <Navbar />
        <div className="place-insert-info">
          <h2>
            If you want to share about a
            <br />
            place not in tourguide, you can click here:
          </h2>
          <button>Insert a place</button>
        </div>
        <div className="place-search-title">
          <h2>Here are your place details search:</h2>
        </div>
      </div>
      <div className="place-list-section">
        <div className="place-list-wrapper">
          <SearchPlaceIntro />
          <div className="place-list-essential">
            <h2>Japan cities:</h2>
            <div className="search-city-card-list">
              <PlaceCityCard name="Yokohoma" country="Japan" />
              <PlaceCityCard name="Kobe" country="Japan" />
              <PlaceCityCard name="Atami" country="Japan" />
            </div>
            <h2>Great hotels to stay in Japan:</h2>
            <div className="search-city-card-list">
              <FeaturedHotel
                name="Hotel La Suite Kobe Harborland"
                city="Kobe"
                country="Japan"
                price="Starting from $379"
                reviewnums="534"
                review="3-stars"
                quality="4-star"
              />
              <FeaturedHotel
                name="Hotel La Suite Kobe Harborland"
                city="Kobe"
                country="Japan"
                price="Starting from $379"
                reviewnums="534"
                review="3-stars"
                quality="4-star"
              />
              <FeaturedHotel
                name="Hotel La Suite Kobe Harborland"
                city="Kobe"
                country="Japan"
                price="Starting from $379"
                reviewnums="534"
                review="3-stars"
                quality="4-star"
              />
            </div>
            <h2>Some good restaurant to dine in Japan:</h2>
            <div className="search-city-card-list">
              <FeaturedRestaurant />
              <FeaturedRestaurant />
              <FeaturedRestaurant />
            </div>
            <h2>Some car rentals service in Japan:</h2>
            <div className="search-city-card-list">
              <FeaturedCar />
              <FeaturedCar />
              <FeaturedCar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesList;
