import * as types from "../action-creators/types";

const initialState = {
  id: "",
  title: "",
  description: "",
  year: "",
  color: "white",
  status: "",
  price: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FORM_CHANGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default formReducer;
