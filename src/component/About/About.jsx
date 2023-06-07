import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container text-center">
      <h2 className="text-center text-success m-4">About</h2>
      <div className="container text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card text-white ">
                <div className="card-body bg-black">
                  <div>
                    <p>
                      Welcome to our stock market website. We provide up-to-date information and analysis on various stocks and financial markets.
                    </p>
                  </div>
                  <div>
                    <p>
                      Our mission is to empower investors with the knowledge and tools they need to make informed decisions in the dynamic world of investing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="about-container">
                <h4 className="text-center text-success m-4">Our Goals</h4>
                <div className="row">
                  <div className="col-md-2">
                    <div className="card text-white mb-3 h-100">
                      <div className="card-body bg-black">
                        <p className="card-text">
                          Provide accurate and timely stock market information
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card text-white mb-3 h-100">
                      <div className="card-body bg-black">
                        <p className="card-text">
                          Offer comprehensive analysis of financial markets
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card text-white mb-3 h-100">
                      <div className="card-body bg-black">
                        <p className="card-text">
                          Empower investors with knowledge and tools for informed decision-making
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card text-white mb-3 h-100">
                      <div className="card-body bg-black">
                        <p className="card-text">
                          Facilitate access to diverse investment opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card text-white mb-3 h-100">
                      <div className="card-body bg-black">
                        <p className="card-text">
                          Promote financial literacy and education
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card text-white mb-3 h-100">
                      <div className="card-body bg-black">
                        <p className="card-text">
                          Foster collaboration and knowledge sharing within the investment community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
