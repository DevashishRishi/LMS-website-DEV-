import React, { useState, useEffect, useRef } from "react";
import "./DeepLearning.css";
import Introduction from "./Introduction";
import ArtificialNeuralNetwork from "./ArtificialNeuralNetwork";
import ConvolutionNeuralNetwork from "./ConvolutionNeuralNetwork";
import RecurrentNeuralNetworks from "./RecurrentNeuralNetworks";
import MultiLayerPerceptron from "./MultiLayerPerceptron";
import GenerativeAdversarialNetwork from "./GenerativeAdversarialNetwork ";
import DeepReinforcementLearning from "./DeepReinforcementLearning";
import Autoencoder from "./Autoencoder";
import BoltzmannMachine from "./BoltzmannMachine";
import Footer from "../../components/Footer/Footer";

const DeepLearning = () => {
  const pages = [
    "Introduction",
    "Artificial neural network",
    "Convolution neural network",
    "Recurrent neural networks",
    "MultiLayer perceptron",
    "Generative adversarial network",
    "Auto encoder",
    "Deep reinforcement learning",
    "Boltzmann machine",
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
          <h1>Deep Learning</h1>
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
          {currentPage === "Artificial neural network" && (
            <ArtificialNeuralNetwork />
          )}
          {currentPage === "Convolution neural network" && (
            <ConvolutionNeuralNetwork />
          )}
          {currentPage === "Recurrent neural networks" && (
            <RecurrentNeuralNetworks />
          )}
          {currentPage === "MultiLayer perceptron" && <MultiLayerPerceptron />}
          {currentPage === "Generative adversarial network" && (
            <GenerativeAdversarialNetwork />
          )}
          {currentPage === "Auto encoder" && <Autoencoder />}
          {currentPage === "Deep reinforcement learning" && (
            <DeepReinforcementLearning />
          )}
          {currentPage === "Boltzmann machine" && <BoltzmannMachine />}
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

export default DeepLearning;
