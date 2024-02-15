import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Header/Navbar";
import NavbarItems from "./components/Header/NavbarItems";
import Footer from "./components/Footer/Footer";
import Tutorials from "./pages/Tutorials";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Enroll from "./pages/Enroll";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <NavbarItems />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
