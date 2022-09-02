import React from "react";
import "./searchplaceintro.css";
import img from "./img.jpg";

const SearchPlaceIntro = () => {
  return (
    <div className="search-place-intro">
      <div className="search-place-intro-wrapper">
        <img src={img} alt="img" className="search-place-intro-img" />
        <h2>About Japan</h2>
        <div className="search-place-intro-text">
          <p>
            In the Land of the Rising Sun, ancient temples sit alongside
            <br /> neon wonderlands and shinto shrines offer pockets of peace
            <br /> amid metropolises. Add tea ceremonies, snow monkeys, sushi,
            <br /> kimonos, and karaoke to the mix, and you’ve got one of the
            <br /> world’s most fascinating countries.
          </p>
          <h2>
            Capital: Tokyo
            <br />
            Area: 377,975 km²
            <br />
            Prime minister: Fumio Kishida
            <br />
            Population: 125.8 million (2020)
            <br />
            Gross domestic product: 5.065 trillion USD
            <br />
            Currency: Japanese yen
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SearchPlaceIntro;
