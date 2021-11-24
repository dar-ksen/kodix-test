import React from "react";
import Container from "../UI/container";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__copyright">
          <p>&copy; 2015 CAPTAIN QUACK</p>
          <p>Десница тысячелетия и моллюск!</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
