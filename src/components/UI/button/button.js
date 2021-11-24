import React from "react";
import classNames from "classnames";

import "./button.scss";
const Button = ({ className, children, ...buttonProps }) => {
  const classes = classNames("btn", className);
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
