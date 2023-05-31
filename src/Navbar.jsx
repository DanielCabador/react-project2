import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <a className="navbar-brand ml-3" href="#">Resolute</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">Graphs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
