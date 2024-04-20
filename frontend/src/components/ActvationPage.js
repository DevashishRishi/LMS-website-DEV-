import React, { useState } from "react";
import axios from "axios";
import "./ActivationPage.css";
import Footer from "./Footer/Footer";

const ActivationPage = () => {
  const [activationCode, setActivationCode] = useState(""); // State to store activation code
  const [activationToken, setActivationToken] = useState(""); // State to store activation token
  const [success, setSuccess] = useState(false); // State to track activation success

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if activation token is empty or null
    if (!activationToken) {
      console.error("Activation token is missing.");
      return;
    }

    // Check if activation code is empty or null
    if (!activationCode) {
      console.error("Activation code is required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/activate-user",
        { activation_code: activationCode, activation_token: activationToken }
      );
      console.log("Activation successful:", response.data);
      // Handle success, e.g., display a success message to the user
      setSuccess(true); // Set success to true upon successful activation
    } catch (error) {
      console.error("Activation failed:", error.message);
      // Handle error, e.g., display an error message to the user
    }
  };

  const handleActivationCodeChange = (e) => {
    setActivationCode(e.target.value);
  };

  const handleTokenChange = () => {
    // Get activation_token from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("activationToken");
    setActivationToken(token);
  };

  // Redirect to login page upon successful activation
  if (success) {
    return (
      <div className="activation-container">
        <div className="activation-content">
          <h1 className="activation-heading">Registration Done!</h1>
          <p>Redirecting to login page...</p>
          {(window.location.href = "/login")}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="activation-container">
        <div className="activation-box">
          <div className="activation-content">
            <h1 className="activation-heading">Enter Activation Code</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Activation Code"
                value={activationCode}
                onChange={handleActivationCodeChange}
                onFocus={handleTokenChange} // Fetch activation token when user focuses on the input field
              />
              <button type="submit">Activate</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivationPage;
