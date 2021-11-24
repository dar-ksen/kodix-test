import React from "react";
import CarList from "../car-list";
import Form from "../form";
import Container from "../UI/container";
import "./main.scss";

const Main = () => {
  return (
    <main className="main">
      <Container>
        <h1 className="main__title">¡Ay caramba!</h1>
        <Form />
        <CarList />
      </Container>
    </main>
  );
};

export default Main;
