import React from "react";
import "./car-list.scss";

const CarList = (props) => {
  const items = null;
  return (
    <section className="car-list">
      <h2 className="car-list__title">Автомобили в наличии</h2>
      <div className="car-list__header">
        <div className="car-list__header-col car-list__header-col--name">
          Название
        </div>
        <div className="car-list__header-col car-list__header-col--year">
          Год
        </div>
        <div className="car-list__header-col car-list__header-col--color">
          Цвет
        </div>
        <div className="car-list__header-col car-list__header-col--status">
          Статус
        </div>
        <div className="car-list__header-col car-list__header-col--price">
          Цена
        </div>
      </div>
      {items}
    </section>
  );
};

export default CarList;
