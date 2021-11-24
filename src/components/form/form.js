import React from "react";
import Grid from "../UI/grid";
import Input from "../UI/input";
import FormFieldset from "../UI/form-fieldset";
import ColorRadio from "../UI/color-radio";
import CustomSelect from "../UI/custom-select/";
import Button from "../UI/button";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";

import "./form.scss";

const Form = () => {
  const form = useSelector((state) => state.form);
  const colors = useSelector((state) => state.colors);
  const { formChange, addCar } = useActions();

  const onSubmit = (e) => {
    e.preventDefault();
    const uniqId = new Date().getTime();
    formChange({ id: uniqId });

    addCar(form);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <Grid container>
        <Grid item mobile={12} tablet={4}>
          <Input
            name="title"
            type="text"
            label="Название"
            required
            value={form.title}
            onChange={(e) => {
              formChange({ title: e.target.value });
            }}
          />
        </Grid>
        <Grid item mobile={6} tablet={4}>
          <Input
            name="year"
            type="text"
            label="Год"
            autoComplete="off"
            required
            value={form.year}
            onChange={(e) => {
              const value = Number(e.target.value.replace(/\D/g, ""));
              formChange({ year: value !== 0 ? value : "" });
            }}
          />
        </Grid>
        <Grid item mobile={6} tablet={4}>
          <Input
            name="price"
            type="text"
            label="Цена"
            autoComplete="off"
            required
            value={form.price}
            onChange={(e) => {
              const value = Number(
                e.target.value.replace(/\D/g, "")
              ).toLocaleString("ru");
              formChange({ price: value });
            }}
          />
        </Grid>
        <Grid item mobile={12}>
          <Input
            name="description"
            type="text"
            label="Описание"
            autoComplete="off"
            value={form.description}
            onChange={(e) => {
              formChange({ description: e.target.value });
            }}
          />
        </Grid>
        <Grid item mobile={12} tablet={4}>
          <FormFieldset legend="Цвет">
            {colors.map((c) => (
              <ColorRadio
                key={c}
                className="form-fieldset__item"
                mark={c === "white"}
                color={c}
                onChange={() => {
                  formChange({ color: c });
                }}
                checked={form.color === c}
              />
            ))}
          </FormFieldset>
        </Grid>
        <Grid item mobile={6} tablet={4}>
          <CustomSelect
            items={[
              { value: "in_stock", description: "В наличии" },
              { value: "pending", description: "Ожидается" },
              { value: "out_of_stock", description: "Нет в наличии" },
            ]}
            select={formChange}
            selected={form.status}
          />
        </Grid>
        <Grid item mobile={6} tablet={4}>
          <Button className="wide" type="submit">
            Отправить
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.462612 1.33332C-0.0220425 1.85337 -0.0220425 2.69327 0.462612 3.21332L4.88761 7.99999L0.462612 12.72C-0.0220425 13.24 -0.0220425 14.0799 0.462612 14.6C0.69732 14.8524 1.01681 14.9944 1.35011 14.9944C1.68341 14.9944 2.0029 14.8524 2.23761 14.6L7.53761 8.94665C7.77425 8.6963 7.90736 8.3555 7.90736 7.99999C7.90736 7.64447 7.77425 7.30368 7.53761 7.05332L2.23761 1.33332C2.0029 1.0809 1.68341 0.938922 1.35011 0.938922C1.01681 0.938922 0.69732 1.0809 0.462612 1.33332Z"
                fill="white"
              />
            </svg>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
