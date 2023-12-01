import React from "react";
import { Link } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <div className="Home-wrapper">
      <div className="Dayton-img"></div>
      <div className="Link-Container">
        <Card.Title className="Card-Title">Dayton T. Neuburger</Card.Title>
        <Card.Subtitle className="Card-Subtitle">
          3D Artist & Game Developer
        </Card.Subtitle>
        <Card.Text className="Card-Text">
          Thanks for visiting my portfolio site. Check out my work by clicking
          one of the options below
        </Card.Text>
        <div className="Buttons-Container">
        <Button className="btn" variant="dark">
          3D Art
        </Button>
        <Button className="btn" variant="dark">
          Game Development
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
