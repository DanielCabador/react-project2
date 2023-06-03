import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col icon-wrapper">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
