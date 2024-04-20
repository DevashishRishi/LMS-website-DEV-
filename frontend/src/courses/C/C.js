import React, { useState, useEffect, useRef } from "react";
import "./C.css";
import Introduction from "./Introduction";
import CompilingACProgram from "./CompilingACProgram";
import DataTypes from "./DataTypes";
import Operators from "./Operators";
import SDLC from "./SDLC";
import ConditionalStructure from "./ConditionalStructure";
import OneDArray from "./OneDArray";
import TwoDArray from "./TwoDArray";
import Functions from "./Functions";
import Pointers from "./Pointers";
import Footer from "../../components/Footer/Footer";

const C = () => {
  const pages = [
    "Introduction",
    "Compiling a C program",
    "Operators",
    "Data types",
    "SDLC",
    "Conditional structure",
    "One D array",
    "Two D array",
    "Functions",
    "Pointers",
  ];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.scrollTo(0, 0);
  }, [currentPageIndex]);

  const goToPreviousPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex < pages.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleLinkClick = (pageName, event) => {
    event.preventDefault();
    const pageIndex = pages.indexOf(pageName);
    setCurrentPageIndex(pageIndex);
  };

  const currentPage = pages[currentPageIndex];

  return (
    <div>
      <div className="sidebar">
        {pages.map((pageName, index) => (
          <a
            key={index}
            href="/"
            className={currentPage === pageName ? "active" : ""}
            onClick={(e) => handleLinkClick(pageName, e)}
          >
            {pageName}
          </a>
        ))}
      </div>

      <div className="content" ref={contentRef}>
        <div style={{ maxWidth: "1000px", padding: "20px" }}>
          <h1>C</h1>
          <div className="pagination">
            <button
              onClick={goToPreviousPage}
              disabled={currentPageIndex === 0}
            >
              Previous
            </button>
            <button
              className="next"
              onClick={goToNextPage}
              disabled={currentPageIndex === pages.length - 1}
            >
              Next
            </button>
          </div>
          {currentPage === "Introduction" && <Introduction />}
          {currentPage === "Compiling a C program" && <CompilingACProgram />}
          {currentPage === "Data types" && <DataTypes />}
          {currentPage === "Operators" && <Operators />}
          {currentPage === "SDLC" && <SDLC />}
          {currentPage === "Functions" && <Functions />}
          {currentPage === "Pointers" && <Pointers />}
          {currentPage === "One D array" && <OneDArray />}
          {currentPage === "Two D array" && <TwoDArray />}
          {currentPage === "Conditional structure" && <ConditionalStructure />}
          <div className="pagination">
            <button
              onClick={goToPreviousPage}
              disabled={currentPageIndex === 0}
              style={{ marginTop: "30px" }}
            >
              Previous
            </button>
            <button
              className="next"
              onClick={goToNextPage}
              disabled={currentPageIndex === pages.length - 1}
              style={{ marginTop: "30px" }}
            >
              Next
            </button>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default C;
