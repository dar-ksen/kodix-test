import React from "react";
import "./car-item.scss";

const CarItem = ({ id, title, description, year, color, status, price }) => {
  const priceIntl = price.toLocaleString("ru");
  const background =
    color === "white" || color === "#fff"
      ? { background: color, border: "1px solid #ddd", width: 18, height: 18 }
      : { background: color };

  // const deleteItem = (id) => props.dispatch(actions.deleteCar(id));

  return (
    <div className="car-item">
      <div className="car-item__name">{title}</div>
      <div className="car-item__color" style={background} />
      <div className="car-item__price">{`${priceIntl} руб.`}</div>
      {description && <div className="car-ite__options">{description}</div>}
      <div className="car-item__year">{year}</div>
      <div className="car-item__status">{status}</div>
      <button onClick={() => {}} className="car-item__delete">
        Удалить
      </button>
    </div>
  );
};

export default CarItem;
