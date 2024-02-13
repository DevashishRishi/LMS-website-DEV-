import React from "react";
import "./Navbar.css";
import logo_light from "../../assests/logo-black.jpg";
import logo_dark from "../../assests/logo-white.png";
import search_icon_light from "../../assests/search-w.png";
import search_icon_dark from "../../assests/search-b.png";
// import toggle_light from "../../assests/night.png";
import toggle_dark from "../../assests/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>Tutorials</li>
        <li>Excercises</li>
        <li>Blog</li>
        <li>About Us</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt=""
          className="search-icon"
        />
      </div>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === "light" ? toggle_dark : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
