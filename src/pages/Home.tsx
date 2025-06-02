import Card from "../components/CardProject";
import "../styles/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "../assets/images/express-logo.png";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 0,
    arrows: true,
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of our application.</p>
      </div>
      <Card title="Project" description="description" />

      <Slider {...settings}>
        <div>
          <img src={logo} />
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        <div>
          <h3>Slide 4</h3>
        </div>
        <div>
          <h3>Slide 5</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
