import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import "./car-item.scss";

const CarItem = ({ id, title, description, year, color, status, price }) => {
  const { deleteCar } = useActions();
  const statusMap = useSelector((state) => state.status);
  const priceIntl = price.toLocaleString("ru");
  
  const background =
    color === "white" || color === "#fff"
      ? { background: color, border: "1px solid #ddd", width: 18, height: 18 }
      : { background: color };

  return (
    <div className="car-item">
      <div className="car-item__name">{title}</div>
      <div className="car-item__color" style={background} />
      <div className="car-item__price">{`${priceIntl} руб.`}</div>
      {description && <div className="car-item__options">{description}</div>}
      <div className="car-item__year">{year}</div>
      <div className="car-item__status">{statusMap[status]}</div>
      <button onClick={() => deleteCar(id)} className="car-item__delete">
        Удалить
      </button>
    </div>
  );
};

export default CarItem;
