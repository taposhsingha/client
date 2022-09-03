import React from "react";
import "./login.css";
import img from "./img.jpg";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <img src={img} alt="img" className="login-img" />
        <div className="login-text">
          <h2 className="login-title">Welcome to Tourguide</h2>
          <div className="login-email">
            <h2>E-mail</h2>
            <input type="email" />
          </div>
          <div className="login-password">
            <h2>Password</h2>
            <input type="password" />
          </div>
          <div className="login-button-wrapper">
            <button className="login-button">Login</button>
            <button className="go-to-register-button">
              Go to Register page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
