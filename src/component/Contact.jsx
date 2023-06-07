import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container-fluid  p-5 contact-wrapper mt-2">
        <div className="row">
          <div className="col-md-6 contact-column p-3">
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
                <div className="col-md-6 text-center ">
                  <div className="contact-icon-wrapper">
                    <MdCall size={35} className="m-2 text-success" />
                    <span>Call</span>
                    <br />
                    <span>021 123 145 14</span>
                    <div className="icon-button">Call Now</div>
                  </div>
                </div>

                <div className="col-md-6  text-center">
                  <div className="contact-icon-wrapper">
                    <BsFillChatDotsFill
                      size={35}
                      className="m-2 text-success"
                    />
                    <span>Chat</span>
                    <br />
                    <span>021 123 145 14</span>
                    <div className="icon-button">
                      <a href="mailto:devop.jas@gmail.com">
                        <button
                          style={{
                            border: "none",
                            background: "transparent",
                            color: "white",
                          }}
                        >
                          Chat Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 text-center">
                  <div className="contact-icon-wrapper">
                    <MdCall size={35} className="m-2 text-success" />
                    <span>Video Call</span>
                    <br />
                    <span>021 123 145 14</span>
                    <div className="icon-button">Video Call Now</div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="contact-icon-wrapper">
                    <div className="">
                      <BsFillChatDotsFill
                        size={35}
                        className="m-2 text-success"
                      />
                      <span>Message</span>
                      <br />
                      <span>021 123 145 14</span>
                    </div>
                    <div className="icon-button">Message Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center right-section-wrapper p-3">
            <img src="./Logoooo.png" alt="" />
            <br />
            <img
              src="./public/contact-image.png"
              alt=""
              className="right-section-image"
            />
          </div>
        </div>
        <div
          className="get-started-text-wrapper text-center mt-4"
          style={{ color: "white", fontWeight: "500" }}
        >
          <span>
            Get Started with <b className="text-success">Resolute</b>
          </span>{" "}
          <br />
          <span>By Signing Up</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
