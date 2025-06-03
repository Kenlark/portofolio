import Card from "../components/CardProject";
import "../styles/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import express_logo from "../assets/images/express-logo.svg";
import node_logo from "../assets/images/node-js.svg";
import html_logo from "../assets/images/html5.svg";
import css_logo from "../assets/images/css.svg";
import javascript_logo from "../assets/images/javascript.svg";
import react_logo from "../assets/images/react.svg";
import typescript_logo from "../assets/images/typescript.svg";
import mongodb_logo from "../assets/images/mongodb.svg";
import postgresql_logo from "../assets/images/postgresql.svg";
import vite_logo from "../assets/images/vite.svg";
import git_logo from "../assets/images/git.svg";
import figma_logo from "../assets/images/figma.svg";

const logos = [
  express_logo,
  node_logo,
  html_logo,
  css_logo,
  javascript_logo,
  react_logo,
  typescript_logo,
  mongodb_logo,
  postgresql_logo,
  vite_logo,
  git_logo,
  figma_logo,
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
