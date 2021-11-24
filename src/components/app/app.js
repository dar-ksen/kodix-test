import React from "react";
import "normalize.css";
import "./app.scss";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
