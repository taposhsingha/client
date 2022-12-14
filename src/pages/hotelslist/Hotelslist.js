import React, { useState } from "react";
import "./hotelslist.css";
import Navbar from "../../components/navbar/Navbar";
import HotelInfoCard from "../../components/hotelInfoCard/HotelInfoCard";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Hotelslist = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
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
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <input
              className="headerSearchInput"
              type="text"
              placeholder="type of search"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>

            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
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
