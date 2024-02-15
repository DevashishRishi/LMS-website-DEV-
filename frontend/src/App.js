import React, { useEffect, useState } from "react";
import Navbar from "./components/Header/Navbar";
import NavbarItems from "./components/Header/NavbarItems";
import HeroSection from "./components/Hero-Section/HeroSection";
import CompanySection from "./components/Company-section/Company";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import ChooseUs from "./components/Choose-us/ChooseUs";
import Features from "./components/Feature-section/Features";
import FreeCourse from "./components/Free-course-section/FreeCourse";
import Testimonials from "./components/Testimonial/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <div>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <NavbarItems />
        <HeroSection />
        <CompanySection />
        <AboutUs />
        <Courses />
        <ChooseUs />
        <Features />
        <FreeCourse />
        <Testimonials />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
