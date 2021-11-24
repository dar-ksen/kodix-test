import React from "react";
import CarList from "../car-list";
import Button from "../UI/button";
import ColorRadio from "../UI/color-radio";
import Container from "../UI/container";
import CustomSelect from "../UI/custom-select/custom-select";
import FormFieldset from "../UI/form-fieldset";
import Grid from "../UI/grid";
import MyInput from "../UI/input";
import "./main.scss";

const Main = () => {
  return (
    <main className="main">
      <Container>
        <h1 className="main__title">¡Ay caramba!</h1>
        <Grid container>
          <Grid item mobile={4}>
            <MyInput name="title" type="text" label="Название" />
          </Grid>
          <Grid item mobile={4}>
            <MyInput name="title" type="text" label="Название" />
          </Grid>
          <Grid item mobile={4}>
            <MyInput name="title" type="text" label="Название" />
          </Grid>
          <Grid item mobile={12}>
            <MyInput name="title" type="text" label="Название" />
          </Grid>
          <Grid item mobile={4}>
            <FormFieldset legend="Цвет">
              <ColorRadio
                className="form-fieldset__item"
                color="white"
                mark
                onChange={() => console.log("test")}
              />
              <ColorRadio
                className="form-fieldset__item"
                color="green"
                onChange={() => console.log("test")}
              />
            </FormFieldset>
          </Grid>
          <Grid item mobile={4}>
            <CustomSelect
              items={[
                { value: "В наличии", id: 1 },
                { value: "Ожидается", id: 2 },
                { value: "Нет в наличии", id: 3 },
              ]}
              selectItem={() => {}}
              selectedItem={""}
            />
          </Grid>
          <Grid item mobile={4}>
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.462612 1.33332C-0.0220425 1.85337 -0.0220425 2.69327 0.462612 3.21332L4.88761 7.99999L0.462612 12.72C-0.0220425 13.24 -0.0220425 14.0799 0.462612 14.6C0.69732 14.8524 1.01681 14.9944 1.35011 14.9944C1.68341 14.9944 2.0029 14.8524 2.23761 14.6L7.53761 8.94665C7.77425 8.6963 7.90736 8.3555 7.90736 7.99999C7.90736 7.64447 7.77425 7.30368 7.53761 7.05332L2.23761 1.33332C2.0029 1.0809 1.68341 0.938922 1.35011 0.938922C1.01681 0.938922 0.69732 1.0809 0.462612 1.33332Z"
                  fill="white"
                />
              </svg>
            </Button>
          </Grid>
        </Grid>
        <CarList />
      </Container>
    </main>
  );
};

export default Main;
