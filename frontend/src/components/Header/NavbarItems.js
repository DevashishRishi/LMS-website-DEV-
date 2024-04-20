import React from "react";
import "./NavbarItems.css";
import { Outlet, Link } from "react-router-dom";

const NavbarItems = () => {
  return (
    <div className="navbar-items">
      <ul className="items" style={{ listStyleType: "none" }}>
        <li>
          <Link to="/C">C</Link>
        </li>
        <li>
          <Link to="/C++">C++</Link>
        </li>
        <li>
          <Link to="/java">Java</Link>
        </li>
        <li>
          <Link to="/python">Python</Link>
        </li>
        <li>
          <Link to="/machine_learning">Machine Learning</Link>
        </li>
        <li>
          <Link to="/deep_learning">Deep Learning</Link>
        </li>
        {/* <li>
          <Link to="/python">Javascript</Link>
        </li> */}
      </ul>
      <Outlet />
    </div>
  );
};

export default NavbarItems;
