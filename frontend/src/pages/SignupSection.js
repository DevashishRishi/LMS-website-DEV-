import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import { NavLink } from "react-router-dom";
import "./signup.css";

const SignupSection = () => {
  return (
    <>
      <div class="container-signup">
        <div class="form-signup">
          <div class="signup">
            <p class="signup-head">Welcome Back!</p>
            <p class="signup-para">
              Register With Your Personal Details to us to access all the site
              features
            </p>
            <NavLink to="/login">
              <button class="signup-btn">Login</button>
            </NavLink>
          </div>
          <div class="login">
            <h1>
              <b>Create Account</b>
            </h1>
            <div className="social-icon">
              <FontAwesomeIcon className="fa-brands" icon={faGooglePlusG} />
              <FontAwesomeIcon className="fa-brands" icon={faFacebook} />
              <FontAwesomeIcon className="fa-brands" icon={faGithub} />
              <FontAwesomeIcon className="fa-brands" icon={faLinkedin} />
            </div>
            <div class="input-icon">
              <input
                type="text"
                placeholder="First Name"
                className="input-singup"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-singup"
              />
              <input type="text" placeholder="Email" className="input-singup" />
              <input
                type="password"
                placeholder="Password"
                className="input-singup"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-singup"
              />
            </div>
            <a href="/">
              <p>Forgot Your Password</p>
            </a>
            <button class="btn">Sign UP</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupSection;
