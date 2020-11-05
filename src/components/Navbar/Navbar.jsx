import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light navbar-custom" id="myNav">
      <Link className="navbar-brand" to="/home">
        Navdeep Puri
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio" className={window.location.pathname === "/portfolio"  ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" className={window.location.pathname === "/contact"  ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
