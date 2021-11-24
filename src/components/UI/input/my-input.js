import React from "react";
import "./my-input.scss";

const MyInput = ({ name, value, onChange, label, ...inputProps }) => {
  return (
    <div className="my-input">
      <input
        name={name}
        id={name}
        {...inputProps}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default MyInput;
