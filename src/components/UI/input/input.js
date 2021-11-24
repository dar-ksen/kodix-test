import React from "react";
import "./input.scss";

const Input = ({ name, value, onChange, label, ...inputProps }) => {
  return (
    <div className="my-input">
      <input
        name={name}
        id={name}
        {...inputProps}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Input;
