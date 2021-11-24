import classNames from "classnames";
import React from "react";
import "./color-radio.scss";

  
const ColorRadio = ({ className, color, onChange, checked, mark }) => {
  const classes = classNames("color-radio", className, { mark: mark });
  return (
    <div className={classes}>
      <input
        type="radio"
        name="color"
        id={color}
        value={color}
        onChange={() => onChange()}
        checked={checked}
      />
      <label style={{ backgroundColor: color }} htmlFor={color}>
        {color}
      </label>
    </div>
  );
};

export default ColorRadio;
