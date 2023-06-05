import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../Authentication/firebase";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleShow = () => {
    const timer = setTimeout(() => {
      setShow(!show);
    }, 300);
    return () => clearTimeout(timer);
  };

  const HandleClick = () => {
    if (signedIn) {
      signOut(auth)
        .then(() => {
          setValue("");
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
          setValue(user.email);
          localStorage.setItem("email", user.email);
          setSignedIn(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
    setSignedIn(!!localStorage.getItem("email"));
  }, []);

  return (
    <div className="container-fluid navbar-wrapper fixed-top p-2">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
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
                <Link className="nav-link list-wrapper" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-wrapper " to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-wrapper" onClick={HandleClick}>
                  {signedIn ? "Sign Out" : "Sign In"}
                </Link>
              </li>
            </ul>
            {value && (
              <div className="text-center">
                <div className="white-gradient"></div>
                <div>
                  <b className="text-success">Signed In as:</b> <br />
                  <span className="text-light">{value}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
