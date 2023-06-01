import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand mx-auto" href="#">
          Resolute
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ml-3">
            <li className="nav-item">
              <Link to="/graphs" className="nav-link">
                Graphs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newupdate" className="nav-link">
                News Updates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
