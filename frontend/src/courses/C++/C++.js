import React, { useState, useEffect, useRef } from "react";
import "./CPP.css";
import Introduction from "./Introduction";
import DataTypes from "./DataTypes";
import Variables from "./Variables";
import Operators from "./Operators";
import ConditionalStatement from "./ConditionalStatement";
import Arrays from "./Arrays";
import MultiDimensionalArray from "./MultiDimensionalArray";
import ThreeDimensionalArray from "./ThreeDimensionalArray";
import Pointers from "./Pointers";
import String from "./String";
import OOPS from "./OOPS";
import Constructor from "./Constructor";
import Destructor from "./Destructor";
import STL from "./STL";
import StringHandling from "./StringHandling";
import ExceptionHandling from "./ExceptionHandling";
import Multithreading from "./Multithreading";
import Footer from "../../components/Footer/Footer";

const CPlusPlus = () => {
  const pages = [
    "Introduction",
    "Data types",
    "Operators",
    "Variables",
    "Conditional statement",
    "Arrays",
    "MultiDimensional array",
    "ThreeDimensional array",
    "Pointers",
    "String",
    "OOPS",
    "Constructor",
    "Destructor",
    "STL",
    "String handling",
    "Exception handling",
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
          <h1>C++</h1>
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
          {currentPage === "Operators" && <Operators />}
          {currentPage === "Variables" && <Variables />}
          {currentPage === "Conditional statement" && <ConditionalStatement />}
          {currentPage === "Arrays" && <Arrays />}
          {currentPage === "MultiDimensional array" && (
            <MultiDimensionalArray />
          )}
          {currentPage === "ThreeDimensional array" && (
            <ThreeDimensionalArray />
          )}
          {currentPage === "Pointers" && <Pointers />}
          {currentPage === "String" && <String />}
          {currentPage === "OOPS" && <OOPS />}
          {currentPage === "Constructor" && <Constructor />}
          {currentPage === "Destructor" && <Destructor />}
          {currentPage === "STL" && <STL />}
          {currentPage === "String handling" && <StringHandling />}
          {currentPage === "Exception handling" && <ExceptionHandling />}
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

export default CPlusPlus;
