import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import imgs from "./img.jpg";
import cars from "./cars.jpg";
import hotels from "./hotels.jpg";
import rests from "./rests.jpg";
import FeaturedCars from "../../components/featuredCars/FeaturedCars";
import FeaturedRestaurants from "../../components/featuredRestaurants/FeaturedRestaurants";
import FeaturedPlaces from "../../components/featuredPlaces/FeaturedPlaces";
import FeaturedHotels from "../../components/featuredHotels/FeaturedHotels";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="middle-sec">
        <h1>
          Whether you want to know about places, hotels or restaurants around
          the world
        </h1>
        <h2>We are here to help</h2>
        <div className="categories">
          <div className="cat-item">
            <img src={imgs} alt="as" />
            <div className="layer">
              <h3>Places</h3>
              <button>Learn More</button>
            </div>
          </div>
          <div className="cat-item">
            <img src={hotels} alt="as" />
            <div className="layer">
              <h3>Hotels</h3>
              <button>Learn More</button>
            </div>
          </div>
          <div className="cat-item">
            <img src={cars} alt="as" />
            <div className="layer">
              <h3>Car Rentals</h3>
              <button>Learn More</button>
            </div>
          </div>
          <div className="cat-item">
            <img src={rests} alt="as" />
            <div className="layer">
              <h3>Restaurants</h3>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-lists">
        <h1 className="list-h1">Not sure what you are looking for?</h1>
        <h3 className="list-h3">
          Here are some suggestions that might be of your taste
        </h3>
        <h2 className="list-h2">Here are some featured places</h2>
        <FeaturedPlaces />
        <h2 className="list-h2">
          Here are some of the best hotel booking deals for you
        </h2>
        <FeaturedHotels />
        <h2 className="list-h2">
          Here are some car rentals service deals for you
        </h2>
        <FeaturedCars />
        <h2 className="list-h2">
          Here are some amazing restaurants around the world
        </h2>
        <FeaturedRestaurants />
      </div>
      <div className="insert-sec">
        <h2>
          You can insert info about places, hotels,
          <br /> car-rentals or restaurants
          <br />
          here
        </h2>
        <p>upon verification, they will be showcased in tourguide</p>
        <div className="insert-place">asdasd</div>
        <div className="insert-hotel">asdasd</div>
        <div className="insert-carrentals">asdsad</div>
        <div className="insert-rests">asdasd</div>
      </div>
    </div>
  );
};

export default Home;
