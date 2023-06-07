const Value = () => {
  return (
    <div>
      <div className="container common-wrapper mt-5">
        <div className="row">
          <div className="col-md-5 p-2 text-center">
            <img
              src="./swiperE.png"
              alt=""
              className="img-fluid"
              style={{ borderRadius: "2rem", width: "90%" }}
            />
          </div>
          <div className="col-md-7 p-5">
            <div className="white-gradient"></div>
            <h2 className="text-success ">Why Choose Preferred stocks?</h2>
            <div className="text-wrapper">
              <span className="text">
                Preferred stocks generally have a fixed dividend rate.
              </span>
              <span className="text">
                preferred stockholders have a higher claim on assets
              </span>
              <span className="text">compared to common stockholders.</span>
              <span className="text">This means that if the company faces</span>
              <span className="text">
                company matters, such as the election of
              </span>
              <span className="text">
                financial difficulties, preferred stockholders are more likely
                to
              </span>
              <span className="text">
                investment back before common stockholders.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
