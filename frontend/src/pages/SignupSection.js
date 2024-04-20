// SignupSection.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./signup.css";
import Footer from "../components/Footer/Footer";

const SignupSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [activationToken, setActivationToken] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      };
      const response = await axios.post(
        "http://localhost:8000/api/v1/registration",
        formattedData
      );
      console.log("Registration successful:", response.data);
      // Set activation token in state
      setActivationToken(response.data.activationToken);
      // Redirect to activation page with activation_token
      redirectToActivation(response.data.activationToken);
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  const redirectToActivation = (activationToken) => {
    window.location.href = `/activation?activationToken=${activationToken}`;
  };

  return (
    <>
      <div className="container-signup">
        <div className="form-signup">
          <div className="signup">
            <p className="signup-head">Welcome Back!</p>
            <p className="signup-para">
              Register With Your Personal Details to us to access all the site
              features
            </p>
            <NavLink to="/login">
              <button className="signup-btn">Login</button>
            </NavLink>
          </div>
          <div className="signup-f">
            <h1>Create Account</h1>
            <div className="social-icon-f">
              <FontAwesomeIcon
                className="fa-brands"
                icon={faGooglePlusG}
                // onClick={handleGoogleSignIn}
              />
              <FontAwesomeIcon className="fa-brands" icon={faFacebook} />
              <FontAwesomeIcon
                className="fa-brands"
                icon={faGithub}
                // onClick={handleGithubSignIn}
              />
              <FontAwesomeIcon className="fa-brands" icon={faLinkedin} />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-icon">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input-singup"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-singup"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-singup"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn"
                style={{ marginTop: "1rem" }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupSection;
