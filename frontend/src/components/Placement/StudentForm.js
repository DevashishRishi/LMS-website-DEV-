import React, { useState } from "react";
import "./StudentForm.css";
import FormInput from "./form-components/FormInput";
import axios from "axios";

const StudentForm = () => {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    username: "",
    email: "",
    program: "",
    batch: "",
    semester: "",
    preferredTechnology: "",
    birthday: "",
    phoneNo: "",
    occupation: "",
    remark: "",
  });
  const [success, setSuccess] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "program",
      type: "select",
      placeholder: "Program",
      label: "Program",
      required: true,
      options: [
        "B.Tech (Computer Science and Engineering)",
        "B.Tech (AI and ML)",
        "B.Tech (Mechanical Engineering)",
        "B.Tech (Civil Engineering)",
        "BCA",
        "B.Sc",
        "M.Tech (Computer Science and Engineering)",
      ],
    },
    {
      id: 4,
      name: "batch",
      type: "text",
      placeholder: "Batch",
      label: "Batch",
      required: true,
    },
    {
      id: 5,
      name: "semester",
      type: "text",
      placeholder: "Semester",
      label: "Semester",
      required: true,
    },
    {
      id: 6,
      name: "preferredTechnology",
      type: "text",
      placeholder: "Preferred Technology",
      label: "Preferred Technology",
      required: true,
    },
    {
      id: 7,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 8,
      name: "phoneNo",
      type: "tel",
      placeholder: "Phone No.",
      label: "Phone No.",
      pattern: "[0-9]{10}",
      errorMessage: "Phone number should be 10 digits long.",
      required: true,
    },
    {
      id: 9,
      name: "occupation",
      type: "text",
      placeholder: "Occupation",
      label: "Occupation",
      required: true,
    },
    {
      id: 10,
      name: "remark",
      type: "text",
      placeholder: "Remark",
      label: "Remark",
      required: false,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/placement",
        values
      );
      console.log("Placement registration successful:", response.data);
      if (response.data.success) {
        setSuccess(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Placement registration failed:", error.message);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  if (success) {
    // Redirect to homepage
    window.location.href = "/homepage";
    // Or you can use the following if you need to retain the browser history:
    // window.location.replace("/homepage");
    // Note: This method will not preserve the current page in the browser history
    return null; // This line is needed to prevent the form from being rendered after redirection
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Student Registration</h2>
        <br />
        {error && <div className="error-message">{error}</div>}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <div className="button-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
