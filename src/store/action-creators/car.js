import axios from "axios";
import * as types from "./types";

const URL_WITH_JSON =
  "https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json";

export const fetchCars = () => async (dispatch) => {
  try {
    dispatch({ type: types.FETCH_CARS });
    const response = await axios.get(URL_WITH_JSON);
    console.log(response);
    dispatch({ type: types.FETCH_CARS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({
      type: types.FETCH_CARS_ERROR,
      payload: "Произошла ошибка при загрузке списка машин",
    });
  }
};

export const deleteCar = (id) => ({ type: types.DELETE_CAR, payload: id });

export const addCar = (formData) => {
  return { type: types.ADD_CAR, payload: formData };
};
