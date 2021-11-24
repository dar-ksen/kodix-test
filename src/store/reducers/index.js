import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import colorsReducer from "./colorsReducer";
import statusReducer from "./statusReducer";
import formReducer from "./formReducer";

export const rootReducer = combineReducers({
  cars: carsReducer,
  status: statusReducer,
  colors: colorsReducer,
  form: formReducer,
});
