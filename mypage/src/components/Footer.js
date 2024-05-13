import React from "react";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a
          href="https://github.com/aimeekco"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <img src={github} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/aimee-co-686512290/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/aimeee.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
