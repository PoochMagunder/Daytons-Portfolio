import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../assets/css/GradientAnimated.css';
import "../assets/css/Home.css";
import img from '../assets/img/LandingName.png';

const Home = () => {
  return (
    <div className="Home-wrapper">
      <div className="Dayton-img"></div>
      <div className="Link-Container">
        <Card.Img src={img} className="Card-Title"></Card.Img>
        <Card.Subtitle className="Card-Subtitle">
          3D Artist & Game Developer
        </Card.Subtitle>
        <Card.Text className="Card-Text">
          Thanks for visiting my portfolio site. Check out my work by clicking
          one of the options below
        </Card.Text>
        <div className="Buttons-Container">
        <Button as={Link} to="/About" className="btn" variant="outline-light">
          About
        </Button>
        <Button as={Link} to="/Portfolio" className="btn" variant="outline-light">
          Portfolio
        </Button>
        <Button as={Link} to="/Resume" className="btn" variant="outline-light">
          Resume
        </Button>
        <Button as={Link} to="/Projects" className="btn" variant="outline-light">
          Projects
        </Button>

        </div>
      </div>
    </div>
  );
};

export default Home;
