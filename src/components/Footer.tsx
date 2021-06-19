import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a
          href="https://github.com/ava-silver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ava-silver/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"/>
        </a>
        <a
          href="mailto: avapsilver@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
