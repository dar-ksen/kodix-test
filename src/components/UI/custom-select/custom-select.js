import classNames from "classnames";
import React, { useState } from "react";
import "./custom-select.scss";

const CustomSelect = ({ items, selectedItem, selectItem }) => {
  const [showItems, setShowItems] = useState(false);

  const selecterClass = classNames(
    "custom-select",
    { _open: showItems },
    { _selected: selectedItem }
  );

  const onCLick = () => setShowItems((prevShow) => !prevShow);

  return (
    <div className={selecterClass}>
      <div onClick={onCLick} className="custom-select__inner">
        <span className="custom-select__label">Статус</span>
        <span
          className="custom-select__selected-item"
          style={{
            visibility: selectedItem ? "visible" : "hidden",
          }}
        >
          {selectedItem}
        </span>
        <div className="custom-select__arrow" />
      </div>

      <div
        className="custom-select__outer"
        style={{ display: showItems ? "block" : "none" }}
      >
        {items.map((item) => (
          <div
            onClick={() => selectItem(item)}
            className={`custom-select__option ${
              selectedItem === item.value ? "selected" : ""
            }`}
            key={item.id}
          >
            {item.value}
          </div>
        ))}
      </div>
      <input type="hidden" value={selectedItem} name="status" />
    </div>
  );
};

export default CustomSelect;
