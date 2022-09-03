import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./createhotelpage.css";

const CreateHotelPage = () => {
  return (
    <div className="create-hotel-header">
      <div className="create-hotel-section">
        <Navbar />
        <div className="create-hotel-title">
          <h2>
            You can insert Hotel information Here.
            <br />
            After verification, they will added to tourguide:
          </h2>
        </div>
      </div>
      <div className="create-hotel-form">
        <div className="create-hotel-wrapper">
          <div className="hotel-from-name">
            <h2>Hotel Name</h2>
            <input type="text" />
          </div>
          <div className="hotel-from-name">
            <h2>Hotel location</h2>
            <input type="text" />
          </div>
          <div className="hotel-from-name">
            <h2>Hotel phone No.</h2>
            <input type="text" />
          </div>
          <div className="hotel-form-choice">
            <div className="hotel-form-quality">
              <h2>Hotel quality</h2>
              <select
                className="hotel-form-quality-choice"
                name="quality"
                size="1"
              >
                <option value="1-star">1-star</option>
                <option value="2-star">2-star</option>
                <option value="3-star">3-star</option>
                <option value="4-star">4-star</option>
                <option value="5-star">5-star</option>
              </select>
            </div>
            <div className="hotel-form-style">
              <h2>Hotel Style</h2>
              <select className="hotel-form-style-choice" name="quality">
                <option value="budget">Budget</option>
                <option value="mid-range">Mid-range</option>
                <option value="luxury">Luxury</option>
                <option value="family-friendly">Family-friendly</option>
                <option value="modern">Modern</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>
          <div className="hotel-form-amenities">
            <h2>Hotel Amenities</h2>
            <div className="hotel-form-amenities-options">
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
          <div className="hotel-form-amenities">
            <h2>Hotel Room features</h2>
            <div className="hotel-form-amenities-options">
              <label className="container">
                <h2>Blackout curtains</h2>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <h2>Air conditioning </h2>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <h2>Desk</h2>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <h2>Interconnected rooms available</h2>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <h2>Coffee / tea maker</h2>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <h2>Extra long beds</h2>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <h2>Bath / shower</h2>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="hotel-from-name">
            <h2>Hotel Booking Price</h2>
            <input type="text" />
          </div>
          <div className="hotel-form-summary">
            <h2>Hotel details Summary</h2>
            <textarea />
          </div>
          <div className="hotel-form-amenities">
            <h2>Hotel pictures</h2>
            <input type="file" />
          </div>
          <button>Submit Form</button>
        </div>
      </div>
    </div>
  );
};

export default CreateHotelPage;
