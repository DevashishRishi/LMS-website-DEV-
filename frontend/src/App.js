import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NavbarItems from "./components/NavbarItems";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <NavbarItems />
    </div>
  );
};

export default App;
