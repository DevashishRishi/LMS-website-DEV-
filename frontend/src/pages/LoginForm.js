import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom"; // Import Redirect
import axios from "axios";
import "./login.css";
import { signIn } from "next-auth/react";
import Footer from "../components/Footer/Footer";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "/";
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        loginData
      );
      const { success, user } = response.data;
      if (success) {
        setUserName(user.name); // Set the user's name in state
        // Redirect to homepage upon successful login
        window.location.href = "/"; // Redirect to homepage
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/", redirect: true });
  };

  const handleGithubSignIn = async () => {
    await signIn("github", { callbackUrl: "/", redirect: true });
  };

  return (
    <>
      <div className="container-login">
        <div className="form-login">
          {userName ? (
            <div
              className="welcome-message"
              style={{ fontSize: "24px", color: "black" }}
            >
              Welcome, {userName}!
            </div>
          ) : (
            <div className="login-f">
              <h1>Login</h1>
              <div className="social-icon-f">
                <FontAwesomeIcon
                  className="fa-brands"
                  icon={faGooglePlusG}
                  onClick={handleGoogleSignIn}
                />
                <FontAwesomeIcon className="fa-brands" icon={faFacebook} />
                <FontAwesomeIcon
                  className="fa-brands"
                  icon={faGithub}
                  onClick={handleGithubSignIn}
                />
                <FontAwesomeIcon className="fa-brands" icon={faLinkedin} />
              </div>

              <div className="input-icon">
                <input
                  type="text"
                  placeholder="Email"
                  className="input-l"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-l"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </div>
              <a href="/">
                <p>Forgot Your Password</p>
              </a>
              <button className="btn-login" onClick={handleSubmit}>
                Login
              </button>
            </div>
          )}
          <div className="signup-login">
            <p className="signup-head">Hello, Friend!</p>
            <p className="signup-para">
              Register With Your Personal Details to us to access all the site
              features
            </p>
            <NavLink to="/signup">
              <button className="signup-btn">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
