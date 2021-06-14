import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

import "./Navigation.css";

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleMenuClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => setButton(window.innerWidth > 960);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navigation">
        <div className="navigation-container">
          <Link to="/" className="navigation-logo">
            Home
          </Link>
          <div className="menu-icon" onClick={handleMenuClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about-me" className="nav-links" onClick={closeMenu}>
                About Me
              </Link>
              <Link to="/contact" className="nav-links" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline" type="button" onClick={closeMenu}>Sign up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
