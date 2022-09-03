import React, { useState } from "react";
import "./carslist.css";
import Navbar from "../../components/navbar/Navbar";
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
const CarsList = () => {
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
    <div className="cars-list-page">
      <div className="middle-hotel-sec">
        <Navbar />
        <div className="hotel-insert-info">
          <h2>
            If you want to insert information about a car rental service,
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
          <h2>Here are your car search results:</h2>
        </div>
      </div>
      <div className="car-list-content">
        <div className="car-list-content-wrapper">
          <div className="car-list-search-box">
            <div className="car-list-search-box-wrapper">
              <div className="car-search-class">
                <h2>Car seats</h2>
                <input type="number" />
              </div>
              <div className="car-search-car-specs">
                <h2>Car specs</h2>
                <div className="car-search-car-specs-list">
                  <label className="container">
                    <h2>Air conditioning</h2>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    <h2>4+ doors</h2>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    <h2>Automatic Transmission</h2>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    <h2>Manual Transmission</h2>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="car-search-car-types">
                <h2>Electric cars</h2>
                <div className="car-serch-car-type-options">
                  <label className="container">
                    <h2>Fully electric</h2>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    <h2>Hybrid</h2>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    <h2>plug-in hybrid</h2>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="car-search-box-price">
                <h2>Min price</h2>
                <input type="number" />
              </div>
              <div className="car-search-box-price">
                <h2>Max price</h2>
                <input type="number" />
              </div>
              <div className="car-search-box-car-category">
                <h2>Car category</h2>
                <label className="container">
                  <h2>Small</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Medium</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Large</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Premium</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>Minivans</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <h2>SUVs</h2>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="car-list-search-list"></div>
        </div>
      </div>
    </div>
  );
};

export default CarsList;
