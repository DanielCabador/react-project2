import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../Authentication/firebase";
import CountUp from "react-countup";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleShow = () => {
    setShow(!show);
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
    <div className="container-fluid navbar-wrapper  p-2">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="./Logoooo.png"
              alt=""
              style={{ width: "25%", height: "20%" }}
            />
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
            <div className="gradient"></div>
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
                <div>
                  <b className="text-success">Signed In as:</b> <br />
                  <span className="text-light">{value}</span> <br />
                  <span className="text-light">
                    Active Users:{" "}
                    <CountUp
                      className="text-warning"
                      start={4}
                      end={500}
                      duration={10000}
                    />
                  </span>
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
