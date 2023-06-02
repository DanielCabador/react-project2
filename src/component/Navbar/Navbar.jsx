import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container-fluid navbar-wrapper fixed-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Logo
            <div className="white-gradient"></div>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-x"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="white-gradient"></div>
            <button className="button-toggle" onClick={handleShow}>
              {show ? <span>Close</span> : <span>Menu</span>}
            </button>
          </button>

          <div
            className={`collapse navbar-collapse ${show ? "show" : ""}`}
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link list-wrapper"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-wrapper" to="/graphs">
                  Graph
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-wrapper" to="/newupdate">
                  New Update
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-wrapper" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="text-center">
              <li className="nav-item">
                <Link className="nav-link list-wrapper mb-4" to="/contact">
                  Contact Us
                </Link>
              </li>
              <div className="white-gradient"></div>
            </div>
            <span className="navbar-text">Sign In Logo</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
