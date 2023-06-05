const HeroPage = () => {
  return (
    <div className="hero-page bg-black">
      <br />
      <br />
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-6">
            <a href="#" className="picture-link">
              <img src="public\Greenblack-image.jpg" alt="Picture" className="picture-img img-fluid rounded-circle" />
            </a>
          </div>
          <div className="col-lg-6">
            <div className="text-container text-white">
              <h1>This is the Home Page</h1>
              <p>Welcome to our website. Explore and discover amazing content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;



