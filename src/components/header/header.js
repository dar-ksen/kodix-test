import React from "react";
import Container from "../UI/container";
import img1x from "./duck_1x.png";
import img2x from "./duck_2x.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Container className="header__container">
        <img
          className="header__logo"
          src={img1x}
          srcSet={`${img2x} 2x`}
          alt="duck logo"
          width="494"
          height="104"
        />
      </Container>
    </div>
  );
};

export default Header;
