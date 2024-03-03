// LoginForm.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
// import "login.css";
import "./login.css";

const LoginForm = () => {
  return (
    <div class="container-login">
      <div class="form-login">
        <div class="login-f">
          <h1>Login</h1>
          <div className="social-icon-f">
            <FontAwesomeIcon className="fa-brands" icon={faGooglePlusG} />
            <FontAwesomeIcon className="fa-brands" icon={faFacebook} />
            <FontAwesomeIcon className="fa-brands" icon={faGithub} />
            <FontAwesomeIcon className="fa-brands" icon={faLinkedin} />
          </div>

          <div class="input-icon">
            <input type="text" placeholder="Email" className="input-l" />
            <input type="password" placeholder="Password" className="input-l" />
          </div>
          <a href="/">
            <p>Forgot Your Password</p>
          </a>
          <button class="btn-login">Login</button>
        </div>
        <div class="signup-login">
          <p class="signup-head">Hello, Friend!</p>
          <p class="signup-para">
            Register With Your Personal Details to us to access all the site
            features
          </p>
          <NavLink to="/signup">
            <button className="signup-btn">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
