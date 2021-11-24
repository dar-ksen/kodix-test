import * as types from "./types";

export const formChange = (property) => ({
  type: types.FORM_CHANGE,
  payload: property,
});
