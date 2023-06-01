// REACT ICONS
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
// CSS
import "./Contact.css";

// JSX FUNCTION COMPONENT
const Contact = () => {
  return (
    <>
      <div className="container-fluid  p-5 contact-wrapper">
        <div className="gradient-for-contact"></div>
        <div className="row">
          <div className="col-md-5 contact-column">
            <div className="contact-text-wrapper row">
              <span className="green-header-text">Our Contacts</span>
              <span className="white-header-text">Easy to Contact Us</span>
              <span className="white-sub-header-text">
                Embrace the volatility, seize the opportunities, and let your
                investments pave the path to financial growth in the dynamic
                world of the stock market.
              </span>
            </div>
            <div className=" mt-3 ">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-icon-wrapper">
                    <MdCall size={25} />
                    <span>Call</span>
                    <br />
                    <span>021 123 145 14</span>
                    <div>Call Now</div>
                  </div>
                </div>

                <div className="col-md-6 icon-wrapper">
                  <div className="contact-icon-wrapper">
                    <BsFillChatDotsFill size={25} />
                    <span>Chat</span>
                    <br />
                    <span>021 123 145 14</span>
                    <div>Chat Now</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-icon-wrapper">
                    <MdCall size={25} />
                    <span>Video Call</span>
                    <br />
                    <span>021 123 145 14</span>
                    <div>Video Call Now</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-icon-wrapper">
                    <div className="p2">
                      {" "}
                      <BsFillChatDotsFill size={25} />
                      <span>Message</span>
                      <br />
                      <span>021 123 145 14</span>
                    </div>
                    <div>Message Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-center accordion-column">
            <h1 className="text-center">Accordions will display here..</h1>
            <img src="./public/contact-image.png" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <span>Get Started with Resolute</span>
        <span>By Signing Up</span>
        <span>Sign In With Google</span>
      </div>
    </>
  );
};

export default Contact;
