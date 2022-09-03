import React from "react";
import "./hotelslist.css";
import Navbar from "../../components/navbar/Navbar";
import HotelInfoCard from "../../components/hotelInfoCard/HotelInfoCard";

const Hotelslist = () => {
  return (
    <div className="hotel-header">
      <div className="middle-hotel-sec">
        <Navbar />
        <div className="hotel-insert-info">
          <h2>
            If you want to insert information about a hotel,
            <br />
            you can click here
          </h2>
          <button>Insert a hotel</button>
        </div>
        <div className="hotel-search-title">
          <h2>Here are your hotel search results:</h2>
        </div>
      </div>
      <div className="next-sec">
        <div className="next-sec-wrapper">
          <div className="search-box">
            <div className="search-hotel-class">
              <h2>Hotel Class</h2>
              <div className="hotel-class-options">
                <label className="container">
                  <h2>1-star</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>2-star</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>3-star</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>4-star</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>5-star</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="search-hotel-styles">
              <h2>Hotel styles</h2>
              <div className="hotel-styles-options">
                <label className="container">
                  <h2>Budget</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Mid-range</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Luxury</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Family-friendly</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Business</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Modern</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="hotel-price-class">
              <h2>Hotel Price</h2>
              <div className="hotel-price-wrapper">
                <div className="hotel-price-input">
                  <h2>Min price</h2>
                  <input type="number" />
                </div>
                <div className="hotel-price-input">
                  <h2>Max price</h2>
                  <input type="number" />
                </div>
              </div>
            </div>
            <div className="hotel-options-amenities">
              <h2>Hotel Amenities</h2>
              <div className="hotel-amenities-wrapper">
                <label className="container">
                  <h2>Free Wifi</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Business Center</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Free Parking</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Conference Facilities</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Restaurant</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Free Cancellation</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="hotel-rating-options">
              <h2>Hotel Ratings</h2>
              <div className="hotel-ratings-wrapper">
                <label className="container">
                  <h2>5-stars</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>4-start and up</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>3-stars and up</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>2-stars and up</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>1-stars and up</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="search-list">
            <HotelInfoCard />
            <HotelInfoCard />
            <HotelInfoCard />
            <HotelInfoCard />
            <HotelInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotelslist;
