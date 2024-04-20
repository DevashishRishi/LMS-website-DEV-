import React, { useState, useEffect, useRef } from "react";
import "./Java.css";
import Introduction from "./Introduction";
import Footer from "../../components/Footer/Footer";
import DataTypes from "./DataTypes";
import Variables from "./Variables";
import Operators from "./Operators";
import Arrays from "./Arrays";
import String from "./String";
import MultiDimensionalArray from "./MultiDimensionalArray";
import OOPS from "./OOPS";
import Collection from "./Collection";
import Multithreading from "./Multithreading";
import Exception from "./Exception";
import Spring from "./Spring";
const Java = () => {
  const pages = [
    "Introduction",
    "Data types",
    "Variables",
    "Operators",
    "Arrays",
    "MultiDimensional array",
    "OOPS",
    "String",
    "Exception",
    "Collection",
    "Spring",
    "Multithreading",
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
          <h1>Java</h1>
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
          {currentPage === "Data types" && <DataTypes />}
          {currentPage === "Variables" && <Variables />}
          {currentPage === "Operators" && <Operators />}
          {currentPage === "Arrays" && <Arrays />}
          {currentPage === "MultiDimensional array" && (
            <MultiDimensionalArray />
          )}
          {currentPage === "OOPS" && <OOPS />}
          {currentPage === "String" && <String />}
          {currentPage === "Exception" && <Exception />}
          {currentPage === "Collection" && <Collection />}
          {currentPage === "Spring" && <Spring />}
          {currentPage === "Multithreading" && <Multithreading />}
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

export default Java;
