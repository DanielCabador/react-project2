import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../Authentication/firebase";
import { memo } from "react";
import CountUp from "react-countup";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    if (signedIn) {
      signOut(auth)
        .then(() => {
          setEmail("");
          localStorage.removeItem("email");
          setSignedIn(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          setEmail(user.email);
          localStorage.setItem("email", user.email);
          setSignedIn(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
    setSignedIn(!!storedEmail);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src="./Logoooo.png" alt="" style={{ width: "25%", height: "20%" }} />
        </Link>
        <div
          className={`menu-icon ${showMenu ? "open" : ""}`}
          onClick={handleToggleMenu}
        >
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
        <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/market" ? "active" : ""}`}
              to="/market"
            >
              Market
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={handleClick}>
              {signedIn ? "Sign Out" : "Sign In"}
            </Link>
          </li>
        </ul>
        {signedIn && (
          <div className="login-info">
            <span className="text-success">Signed in as:</span> <br />
            <span className="text-light">{email}</span>
          </div>
        )}
        {signedIn && (
          <div className="counter-wrapper">
            <div className="counter-card">
              <span className="text-light">
                Active Users:{" "}
                <CountUp
                  className="text-warning"
                  start={0}
                  end={5000}
                  duration={10000}
                />
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default memo(Navbar);
