import React, { useState, useEffect, useRef } from "react";
import "./ML.css";
import Introduction from "./Introduction";
import MachineLearningTypes from "./MachineLearningTypes";
import LogisticRegression from "./LogisticRegression";
import LinearRegression from "./LinearRegression";
import SupportVectorMachines from "./SupportVectorMachines";
import KNearestNeighbour from "./KNearestNeighbors";
import DecisionTrees from "./DecisionTrees";
import RandomForest from "./RandomForest";
import KMeansClustering from "./KMeansClustering";
import DBSCAN from "./DBSCAN";
import HierarchicalClustering from "./HierarchicalClustering";
import PrincipalComponents from "./PrincipalComponents";
import TDSSNE from "./TDSSNE";
import AssociationRule from "./AssociationRule";
import AprioriAlgorithm from "./AprioriAlgorithm";
import ECLATAlgorithm from "./ECLATAlgorithm";
import Footer from "../../components/Footer/Footer";

const MachineLearning = () => {
  const pages = [
    "Introduction",
    "Machine learning types",
    "Linear regression",
    "Logistic regression",
    "Support vector machines",
    "K nearest neighbour",
    "Decision trees",
    "Random forest",
    "K means clustering",
    "DBSCAN",
    "Hierarchical clustering",
    "Principal components",
    "TDSSNE",
    "Association rule",
    "Apriori algorithm",
    "ECLAT algorithm",
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
          <h1>Machine Learning</h1>
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
          {currentPage === "Machine learning types" && <MachineLearningTypes />}
          {currentPage === "Linear regression" && <LinearRegression />}
          {currentPage === "Logistic regression" && <LogisticRegression />}
          {currentPage === "Support vector machines" && (
            <SupportVectorMachines />
          )}
          {currentPage === "K nearest neighbour" && <KNearestNeighbour />}
          {currentPage === "Decision trees" && <DecisionTrees />}
          {currentPage === "Random forest" && <RandomForest />}
          {currentPage === "K means clustering" && <KMeansClustering />}
          {currentPage === "DBSCAN" && <DBSCAN />}
          {currentPage === "Hierarchical clustering" && (
            <HierarchicalClustering />
          )}
          {currentPage === "Principal components" && <PrincipalComponents />}
          {currentPage === "TDSSNE" && <TDSSNE />}
          {currentPage === "Association rule" && <AssociationRule />}
          {currentPage === "Apriori algorithm" && <AprioriAlgorithm />}
          {currentPage === "ECLAT algorithm" && <ECLATAlgorithm />}
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
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
