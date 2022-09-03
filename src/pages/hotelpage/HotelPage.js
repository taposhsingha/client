import React from "react";
import "./hotelpage.css";
import Navbar from "../../components/navbar/Navbar";
import Hotel from "./hotel.jpg";
import FeaturedHotel from "../../components/featuredHotel/FeaturedHotel";

const HotelPage = () => {
  return (
    <div className="single-hotel">
      <div className="single-hotel-wrapper">
        <Navbar />
        <div className="single-hotel-insert-info">
          <h2>
            If you want to share about a
            <br />
            hotel, you can click here:
          </h2>
          <button>Insert a hotel</button>
        </div>
      </div>
      <div className="single-hotel-content-section">
        <div className="single-hotel-content-wrapper">
          <div className="single-hotel-content-title">
            <h2>Hotel Palm Royal Naha Kokusai Street</h2>
            <a href="www.hotelsite.com">visit hotel website</a>
          </div>
          <img src={Hotel} alt="hotel" className="single-hotel-img" />
          <div className="single-hotel-content-text">
            <p className="located-at">located at</p>
            <div className="single-hotel-location">
              <h2>3-9-10 Makishi, Naha 900-0013 Okinawa Prefecture</h2>
              <p>Telephone no. 00 81 98-865-5551</p>
            </div>
            <div className="single-hotel-content-class-intro">
              <h2>Hotel class</h2>
              <p>Hotel booking price</p>
            </div>
            <div className="single-hotel-content-class-text">
              <h2>4-star</h2>
              <p>starting from $379</p>
            </div>
            <div className="single-hotel-content-summary">
              <h2>Hotel Summary</h2>
              <p>Property amenities</p>
            </div>
            <div className="single-hotel-content-summary-class">
              <h2>
                Located in the heart of NAHA, Kokusai street. Easy access to
                Naha's main streets and also to the Makishi station. Please
                enjoy the newly opened the outdoor pool and the poolside bar in
                this summer 2019! In 2018 the new building equipped with Spa(
                hot water bath , with no charge to our guests), and Art Gellery
                (Corridors of RAM Tower) has been opened. ALL non-smoking.
              </h2>
              <ul>
                <li>Paid public parking nearby</li>
                <li>Hot tub</li>
                <li>Books, DVDs, music for children</li>
                <li>Business Center with Internet Access</li>
                <li>Free WiFi</li>
                <li>Restaurant</li>
                <li>Kids pool</li>
                <li>Conference facilities</li>
              </ul>
            </div>
            <div className="single-hotel-content-reviewnums">
              <h2>Hotel Reviews</h2>
              <p>Room features</p>
            </div>
            <div className="single-hotel-content-review-class">
              <h2>4.5 | 662 reviews</h2>
              <ul>
                <li>Paid public parking nearby</li>
                <li>Hot tub</li>
                <li>Books, DVDs, music for children</li>
                <li>Business Center with Internet Access</li>
                <li>Free WiFi</li>
                <li>Restaurant</li>
                <li>Kids pool</li>
                <li>Conference facilities</li>
              </ul>
            </div>
            <div className="single-hotel-nearby">
              <h2>Hotels nearby:</h2>
            </div>
            <div className="single-hotel-nearby-class">
              <FeaturedHotel
                name="Hotel Azat Naha"
                quality="4-star"
                city="Naha"
                country="Japan"
                reviewnums="355"
                price="starting from $399"
                review="3.5-star"
              />
              <FeaturedHotel
                name="Hotel Azat Naha"
                quality="4-star"
                city="Naha"
                country="Japan"
                reviewnums="355"
                price="starting from $399"
                review="3.5-star"
              />
              <FeaturedHotel
                name="Hotel Azat Naha"
                quality="4-star"
                city="Naha"
                country="Japan"
                reviewnums="355"
                price="starting from $399"
                review="3.5-star"
              />
              <FeaturedHotel
                name="Hotel Azat Naha"
                quality="4-star"
                city="Naha"
                country="Japan"
                reviewnums="355"
                price="starting from $399"
                review="3.5-star"
              />
              <button className="single-hotel-learn-more">Show more</button>
            </div>
            <div className="single-hotel-content-read-review-intro">
              <h2>Here are some reviews by our users:</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
