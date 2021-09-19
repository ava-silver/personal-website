import React from "react";
import "./Header.css";
import logo from "./icons/logo-header.svg";
import mail from "./icons/mail-header.svg";
import github from "./icons/github-header.svg";
import linkedin from "./icons/linkedin-header.svg";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
        <div className="name">Ava Silver</div>
      </div>
      <div className="spacer" />
      <div className="socials">
        <a
          href="mailto: silver.ava@northeastern.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <img src={mail} height="64" width="64" alt="mail" className="icon" />
        </a>
        <a
          href="https://github.com/ava-silver"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <img
            src={github}
            height="64"
            width="64"
            alt="GitHub"
            className="icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ava-silver/"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <img
            src={linkedin}
            height="64"
            width="64"
            alt="LinkedIn"
            className="icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
