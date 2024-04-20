import React, { useState } from "react";
import "./formInput.css";

const FormInput = ({
  label,
  errorMessage,
  onChange,
  id,
  type,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {type === "select" ? (
        <select
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
          className="inputField"
        >
          <option value="" disabled hidden>
            {inputProps.placeholder}
          </option>
          {inputProps.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
          type={type}
          className="inputField"
        />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
