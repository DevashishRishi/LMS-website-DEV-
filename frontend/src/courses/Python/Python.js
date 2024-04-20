import React, { useState, useEffect, useRef } from "react";
import "./Python.css";
import Introduction from "./Introduction";
import VariablesDataTypes from "./VariablesDataTypes";
import FlowControl from "./FlowControl";
import Loops from "./Loops";
import Strings from "./Strings";
import IntroducingLists from "./IntroducingLists";
import Tuples from "./Tuples";
import Dictionary from "./Dictionary";
import Pandas from "./Pandas";
import Footer from "../../components/Footer/Footer";

const Python = () => {
  const pages = [
    "Introduction",
    "Variables data types",
    "Flow control",
    "Loops",
    "Strings",
    "Introducing lists",
    "Tuples",
    "Dictionary",
    "Pandas",
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
          <h1>Python</h1>
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
          {currentPage === "Variables data types" && <VariablesDataTypes />}
          {currentPage === "Flow control" && <FlowControl />}
          {currentPage === "Loops" && <Loops />}
          {currentPage === "Strings" && <Strings />}
          {currentPage === "Introducing lists" && <IntroducingLists />}
          {currentPage === "Tuples" && <Tuples />}
          {currentPage === "Dictionary" && <Dictionary />}
          {currentPage === "Pandas" && <Pandas />}
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

export default Python;
