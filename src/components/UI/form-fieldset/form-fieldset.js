import React from "react";
import "./form-fieldset.scss";

const FormFieldset = ({ children, legend }) => {
  return (
    <fieldset className="form-fieldset">
      <legend>{legend}</legend>
      <div className="form-fieldset__row">{children}</div>
    </fieldset>
  );
};

export default FormFieldset;
