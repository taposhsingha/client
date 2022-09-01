import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <label className="logo">Tourguide</label>
        <div className="buttons">
          <button className="navButton">Hotels</button>
          <button className="navButton">Car Rentals</button>
          <button className="navButton">Restaurants</button>
          <button className="navButton">Places</button>
          <button className="navButton">Blogs</button>
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
