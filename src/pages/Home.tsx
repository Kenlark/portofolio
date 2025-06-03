import Card from "../components/CardProject";
import "../styles/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import express_logo from "../assets/images/express-logo.svg";
import node_logo from "../assets/images/node-js.svg";

const logos = [
  express_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
  node_logo,
];

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 100,
    arrows: false,
    variableWidth: true,
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of our application.</p>
      </div>
      <Card title="Project" description="description" />

      <Slider {...settings} className="carousel">
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Logo ${index + 1}`} className="logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
