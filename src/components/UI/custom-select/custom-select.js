import classNames from "classnames";
import React, { useState } from "react";
import "./custom-select.scss";

const CustomSelect = ({ items, selected, select }) => {
  const [showItems, setShowItems] = useState(false);
  const [label, setLabel] = useState("");

  const selectClass = classNames(
    "custom-select",
    { open: showItems },
    { selected: selected }
  );
  const toggleSelect = () => setShowItems((prevShow) => !prevShow);

  const selectValue = (element) => {
    setShowItems(false);
    setLabel(element.description);
    select({ status: element.value });
  };

  return (
    <div className={selectClass}>
      <div onClick={toggleSelect} className="custom-select__inner">
        <span className="custom-select__label">Статус</span>
        <span
          className="custom-select__selected-item"
          style={{
            visibility: selected ? "visible" : "hidden",
          }}
        >
          {label}
        </span>
        <div className="custom-select__arrow" />
      </div>

      <div
        className="custom-select__outer"
        style={{ display: showItems ? "block" : "none" }}
      >
        {items.map((item) => (
          <div
            onClick={() => selectValue(item)}
            className={`custom-select__option ${
              selected === item.value ? "selected" : ""
            }`}
            key={item.value}
          >
            {item.description}
          </div>
        ))}
      </div>
      <input type="hidden" value={selected} name="status" />
    </div>
  );
};

export default CustomSelect;
