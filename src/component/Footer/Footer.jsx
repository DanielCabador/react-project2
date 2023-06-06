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
          <div className="col-md-6 ">
            <div className="col icon-wrapper text-center">
              <a href="https://www.instagram.com">
                <FaInstagram className="mr-3 icon-wrapper" size={24} />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook className="ml-3 icon-wrapper" size={24} />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter size={24} className="icon-wrapper" />
              </a>
            </div>
            <div className="text-center m-2">
              <span className="m-2">About</span>{" "}
              <span className="m-2">Contact</span>{" "}
              <span className="m-2">Home</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
