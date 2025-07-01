import { useState } from "react";

import Card from "../components/CardProject";
import "../styles/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ExpressLogo from "../assets/images/express-logo.svg?react";
import NodeLogo from "../assets/images/node-js.svg?react";
import HtmlLogo from "../assets/images/html5.svg?react";
import CssLogo from "../assets/images/css.svg?react";
import JavascriptLogo from "../assets/images/javascript.svg?react";
import ReactLogo from "../assets/images/react.svg?react";
import TypescriptLogo from "../assets/images/typescript.svg?react";
import MongodbLogo from "../assets/images/mongodb.svg?react";
import PostgresqlLogo from "../assets/images/postgresql.svg?react";
import ViteLogo from "../assets/images/vite.svg?react";
import GitLogo from "../assets/images/git.svg?react";
import FigmaLogo from "../assets/images/figma.svg?react";
import TerminalMac from "../components/Terminal";

// Mock react-slick avant tout

// On mocke `react-slick` avant d'importer `Home`
// car il utilise `enquire.js` qui appelle `window.matchMedia`
// non défini dans jsdom, causant une erreur au test.
// Ce mock empêche le chargement d'`enquire.js` et évite l'erreur.

vi.mock("react-slick", () => {
  return {
    __esModule: true,
    default: (props: any) => <div>{props.children}</div>,
  };
});

const logos = [
  { Component: ExpressLogo, name: "express" },
  { Component: NodeLogo, name: "node" },
  { Component: HtmlLogo, name: "html" },
  { Component: CssLogo, name: "css" },
  { Component: JavascriptLogo, name: "js" },
  { Component: ReactLogo, name: "react" },
  { Component: TypescriptLogo, name: "ts" },
  { Component: MongodbLogo, name: "mongo" },
  { Component: PostgresqlLogo, name: "postgres" },
  { Component: ViteLogo, name: "vite" },
  { Component: GitLogo, name: "git" },
  { Component: FigmaLogo, name: "figma" },
];

function Home() {
  const [showTerminal, SetshowTerminal] = useState(false);

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

      <Card title="Project" />

      <div>
        <button onClick={() => SetshowTerminal((prev) => !prev)}>
          Projects
        </button>
        {showTerminal ? (
          <TerminalMac onClose={() => SetshowTerminal(false)} />
        ) : null}
      </div>

      <div>
        <h2 className="carousel-title">Technologies</h2>
        <div className="carousel-description">
          <div>
            <p>HTML</p>
          </div>
          <div>
            <p>CSS3</p>
          </div>
          <div>
            <p>JavaScript</p>
          </div>
          <div>
            <p>TypeScript</p>
          </div>
          <div>
            <p>React</p>
          </div>
          <div>
            <p>Vite</p>
          </div>
          <div>
            <p>MongoDB</p>
          </div>
          <div>
            <p>PostgreSQL</p>
          </div>
          <div>
            <p>Node.js</p>
          </div>
          <div>
            <p>Express.js</p>
          </div>
          <div>
            <p>Figma</p>
          </div>
          <div>
            <p>Git</p>
          </div>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div className="fade-left" />
        <div className="fade-right" />

        <Slider {...settings}>
          {logos.map(({ Component, name }, index) => (
            <div key={index} className="logo-slide">
              <Component className={`logo ${name}-logo`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
