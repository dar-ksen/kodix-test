import * as types from "../action-creators/types";

const initialState = {
  cars: [],
  error: null,
  loading: false,
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CARS:
      return { ...state, loading: true };
    case types.FETCH_CARS_SUCCESS:
      return { ...state, loading: false, cars: action.payload };
    case types.FETCH_CARS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case types.ADD_CAR:
      return { ...state, cars: [action.payload, ...state.cars] };
    case types.DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    default:
      return state;
  }
};

export default carsReducer;
