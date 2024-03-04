import React, { useState } from "react";
import "./C.css";
import Introduction from "./Introduction";
import CompilingACProgram from "./CompilingACProgram";
import Footer from "../../components/Footer/Footer";

const C = () => {
  const [currentPage, setCurrentPage] = useState("Introduction");

  const handleLinkClick = (pageName, event) => {
    event.preventDefault();
    setCurrentPage(pageName);
  };

  return (
    <div>
      <div className="sidebar">
        <a
          href="/"
          className={currentPage === "Introduction" ? "active" : ""}
          onClick={(e) => handleLinkClick("Introduction", e)}
        >
          Introduction
        </a>
        <a
          href="/"
          className={currentPage === "CompilingACProgram" ? "active" : ""}
          onClick={(e) => handleLinkClick("CompilingACProgram", e)}
        >
          Compiling a C Program
        </a>
        <a
          href="/"
          className={currentPage === "Operators" ? "active" : ""}
          onClick={(e) => handleLinkClick("Operators", e)}
        >
          Operators
        </a>
        <a
          href="/"
          className={currentPage === "DataTypes" ? "active" : ""}
          onClick={(e) => handleLinkClick("DataTypes", e)}
        >
          Data Types
        </a>
        <a
          href="/"
          className={currentPage === "Functions" ? "active" : ""}
          onClick={(e) => handleLinkClick("Functions", e)}
        >
          Functions
        </a>
      </div>

      <div className="content">
        <div style={{ maxWidth: "1000px", padding: "20px" }}>
          <h1>C</h1>
          {currentPage === "Introduction" && <Introduction />}
          {currentPage === "CompilingACProgram" && <CompilingACProgram />}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default C;
