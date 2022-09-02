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
        </div>
      </div>
    </div>
  );
};

export default CreateHotelPage;
