import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Header/Navbar";
import NavbarItems from "./components/Header/NavbarItems";
import Tutorials from "./pages/Tutorials";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Enroll from "./pages/Enroll";
import Python from "./courses/Python/Python";
import DeepLearning from "./courses/Deep-Learning/DeepLearning";
import MachineLearning from "./courses/Machine-Learning/MachineLearning";
import CPlusPlus from "./courses/C++/C++";
import C from "./courses/C/C";
import Java from "./courses/Java/Java";
import LoginForm from "./pages/LoginForm";
import SignupSection from "./pages/SignupSection";
import Placement from "./pages/Placement";
import ActivationPage from "./components/ActvationPage";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  
  return (
    <Router>
      <div className={`mode ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <NavbarItems />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/activation" element={<ActivationPage />} /> {/* Use element prop for rendering component */}
        <Route path="/deep_learning" element={<DeepLearning />} />
        <Route path="/machine_learning" element={<MachineLearning />} />
        <Route path="/python" element={<Python />} />
        <Route path="/C" element={<C />} />
        <Route path="/C++" element={<CPlusPlus />} />
        <Route path="/java" element={<Java />} />
      </Routes>
    </Router>
  );
};

export default App;
