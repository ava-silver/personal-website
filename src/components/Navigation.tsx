import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [click, setClick] = useState(false);

  const handleMenuClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className="navigation">
        <div className="navigation-container">
          <Link to="/" className="navigation-logo">
            Ava Silver
          </Link>
          <div className="menu-icon" onClick={handleMenuClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-me" className="nav-links" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
