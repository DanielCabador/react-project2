const HeroPage = () => {
  return (
    <div className="container hero-page" style={{ padding: "2rem" }}>
      <div className="row  mt-5">
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
          <div className="text-container text-light ">
            <h1>This is the Home Page</h1>
            <p>Welcome to our website. Explore and discover amazing content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
