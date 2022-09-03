import React from "react";
import "./register.css";
import img from "./img.jpg";

const Register = () => {
  return (
    <div className="register">
      <div className="register-wrapper">
        <img src={img} alt="img" className="register-img" />
        <div className="register-text">
          <h2 className="register-title">Welcome to Tourguide</h2>
          <div className="register-name">
            <h2>Username</h2>
            <input type="text" />
          </div>
          <div className="register-email">
            <h2>E-mail</h2>
            <input type="email" />
          </div>
          <div className="register-password">
            <h2>Password</h2>
            <input type="password" />
          </div>
          <div className="register-button-wrapper">
            <button className="register-button">Register</button>
            <button className="go-to-login-button">Go to login page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
