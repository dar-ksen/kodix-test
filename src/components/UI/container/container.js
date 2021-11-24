import React from "react";
import "./container.scss";
import classNames from "classnames";

const Container = ({ children, className }) => {
  const classes = classNames("container", className);
  return <div className={classes}>{children}</div>;
};

export default Container;
