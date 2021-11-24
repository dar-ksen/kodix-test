import React from "react";
import "./grid.scss";
import classNames from "classnames";

const Grid = ({ className, container, item, children, mobile, tablet }) => {
  const classes = classNames(
    { grid: container },
    { grid__item: item },
    mobile ? `grid__item-mobile-${mobile}` : "",
    tablet ? `grid__item-tablet-${tablet}` : "",
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Grid;
