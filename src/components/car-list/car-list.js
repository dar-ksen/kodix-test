import React from "react";
import CarItem from "../car-item";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import "./car-list.scss";

const CarList = () => {
  const { cars, error, loading } = useSelector((state) => state.cars);
  const { fetchCars } = useActions();

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) {
    return <h2 className="car-list__title">Загрузка данных...</h2>;
  }

  if (error) {
    return <h2 className="car-list__title">{error}</h2>;
  }

  if (cars.length === 0) {
    return <h2 className="car-list__title">Автомобили отсуствуют</h2>;
  }

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
      {cars.map((car) => (
        <CarItem key={car.id} {...car} />
      ))}
    </section>
  );
};

export default CarList;
