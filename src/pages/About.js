import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../assets/css/About.css";
import "../assets/css/GradientAnimated.css";
import img from "../assets/img/LandingName.png";

const About = () => {
  return (
    <div className="About-wrapper">
      <div className="About-Dayton-img"></div>
      <div className="About-Container">
        <Card.Img src={img} className="Card-Title"></Card.Img>
        <Card.Subtitle className="Card-Subtitle">
          3D Artist & Game Developer
        </Card.Subtitle>
        <div className="Info-Container">
          <span>
            Blorga blip blop! Blimba to my corbla of the digital universe! I'm
            [Your Name], a blibberblorp individual fueled by gibberish and a
            love for all things simlish. As you navigibba through these virtual
            pages, allow me to share a glizzle into the tapestry of experiences
            that shape who I am. At my core, I am an exploribba of ideas and a
            perpetual learner. My journey through life has been a mosaic of
            diverse experiences, each contributing to the unique blend of skills
            and perspectives that define me. From the early days of my educibba,
            where I eagerly soaked up knowledge like a blibberblorp, to the
            later years of my career, where I honed my expertise in [Your
            Field], I have always thrived on the thrill of discovery. Creativity
            is the heartbeat of my existence. Whether I'm immersed in the
            written word, crafting stories that transport readers to new
            blibberblorps, or behind the lens, capturing the fleeting beauty of
            the world around us, I find solace in the act of creation. It's not
            just a hobby; it's a calling that permeates every facet of my life.
            Through my creative blibberblorps, I strive to leave an indelible
            mark on the world, one that sparks inspiration and kindles the
            flames of imagination in those who encounter it. In addition to my
            creative endeavors, I am a firm believer in the power of community
            and collaboration. Over the years, I've had the privilege of working
            with a diverse array of individuals and teams, each interaction
            shaping my understanding of the intricate tapestry that is simlish
            connection. Whether it's fostering collaboration in the workplace or
            engaging with a global audience through various online platforms, I
            am continually inspired by the limitless potential that arises when
            sims come together with a shared purpose. Life, however, is not just
            about work and creativity. It's also about embracing the simple joys
            that make each day unique. Whether I'm savoring a cup of freshly
            brewed coffee on a lazy Sunday morning, embarking on spontaneous
            blibberblorps, or losing myself in the pages of a captivating book,
            I believe in finding beauty in the small moments that often go
            unnoticed. As you peruse this digital space, I invite you to join me
            on this journey of exploration and self-discovery. Let's connect,
            share ideas, and create something extraordinary together. Whether
            you're here for inspiration, collaboration, or simply to satisfy
            your simlish curiosity, I'm thrilled to have you along for the
            blorka! Here's to the next chapter in this ever-evolving simlish
            narrative. Glorp!
          </span>
        </div>
        <div className="About-Buttons-Container">
          <Button
            as={Link}
            to="/Projects"
            className="About-btn"
            variant="outline-light"
          >
            Projects
          </Button>
          <Button
            as={Link}
            to="/Portfolio"
            className="About-btn"
            variant="outline-light"
          >
            Portfolio
          </Button>
          <Button
            as={Link}
            to="/Resume"
            className="About-btn"
            variant="outline-light"
          >
            Resume
          </Button>
          <Button as={Link} to="/About" className="About-btn" variant="outline-light">
            About
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
