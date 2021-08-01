import React from "react";
import { Card } from "react-bootstrap";
import Particle from "../../../components/Particles/Particle";
import { ImPointRight } from "react-icons/im";
import myImg from "../../../Assets/about.png";
import './about.css';

function About() {
  return (
    <div style={{
      display: "flex"    }}>
    <Card className="quote-card-view">
      <Card.Body>
        <p
          style={{
            fontSize: "1.8rem",
            fontFamily: "cursive",
            fontWeight: "100",
            textAlign: "justify",
          }}
        >
          Hi Everyone, I am <span className="p">Dipsikha Banerjee </span>
          from <span className="p"> West Bengal, India</span>
          <br />I am a pre-final year student pursuing Bachelor of Technology
          from Dr. B. C. Roy Engineering College Durgapur.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Drawing
          </li>
          <li className="about-activity">
            <ImPointRight /> Singing
          </li>
          <li className="about-activity">
            <ImPointRight /> Travelling
          </li>
        </ul>        
      </Card.Body>
    </Card>
    <div className="myAvtar">
          <img src={myImg} className="img" alt="avatar" />
        </div>
        </div>
  );
}

export default About;
