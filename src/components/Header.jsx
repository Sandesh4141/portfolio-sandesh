import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../public/styles/Header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Sandesh</h1>
        </div>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/download_btn" className="download-btn">
              Download CV
            </Link>
          </li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <>&#10005;</> : <>&#9776;</>} {/* Hamburger Menu Icon */}
        </button>
      </nav>
    </header>
  );
}

export default Header;
