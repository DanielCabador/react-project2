import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand mx-auto" href="#">Resolute</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ml-3">
            <li className="nav-item">
              <a className="nav-link" href="#about">Graphs?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">News Updates?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <h1>Welcome to Resolute</h1>
        <p>Explore the world of stock market trading</p>
      
      </div>
    </div>
  );
};

export default LandingPage;



