const HeroPage = () => {
  return (
    <div className="hero-page container mt-5 ">
      <br />
      <br />
      <div className="-fluid">
        <div className="row">
          <div className="col-lg-7">
            <a href="#" className="text-center picture-link">
              <img
                src="public\Greenblack-image.jpg"
                alt="Picture"
                className="picture-img img-fluid rounded-circle"
              />
            </a>
          </div>
          <div className="col-lg-5 ">
            <div className="container text-container text-white">
              <h1>This is the Home Page</h1>
              <p>
                Welcome to our website. Explore and discover amazing content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
