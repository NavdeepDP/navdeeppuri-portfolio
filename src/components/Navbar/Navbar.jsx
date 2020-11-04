import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //   <nav>
    // <div>
    //   <div>
    //     <Link to="/">Home</Link>
    //   </div>
    //   <div>
    //     <Link to="/portfolio">Portfolio</Link>
    //   </div>
    //   <div>
    //     <Link to="/contact">Contact</Link>
    //   </div>
    // </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <Link className="nav-link" to="/home">
              Home
            </Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
