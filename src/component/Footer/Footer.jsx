import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" text-white  mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src="./Logoooo.png" alt="" style={{ width: "10%" }} /> <br />
            <span>Our Mission is to Provide</span> <br />
            <span>High Quality Service</span>
          </div>
          <div className="col-md-6">
            <div className="col icon-wrapper text-end">
              <a href="https://www.instagram.com">
                <FaInstagram className="mr-3 icon-wrapper" size={24} />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook className="ml-3 icon-wrapper" size={24} />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter size={24} className="icon-wrapper" />
              </a>{" "}
              <br />
              <p className="text-end text-light">145 New you, FL 4571, USA</p>
              <span className="m-2   text-end">About</span>
              <span className="m-2  text-end">Contact</span>
              <span className="m-2  text-end">Home</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
