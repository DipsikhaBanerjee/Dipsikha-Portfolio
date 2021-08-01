import React from 'react';
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import Ibm from "../../../Assets/achievement/IBM.jpg";
import app from "../../../Assets/achievement/0001.jpg";
import Ai from "../../../Assets/achievement/Artificial Intelligence.jpg";
import Security from "../../../Assets/achievement/Cyber Security.jpg";
import google from "../../../Assets/achievement/google.jpg";
import fest from "../../../Assets/achievement/tech.jpg";
import Isro from "../../../Assets/achievement/isro.jpeg";
import aws from "../../../Assets/achievement/aws.jpg";
import work from "../../../Assets/achievement/Workshop.jpg";
import intern from "../../../Assets/achievement/intern.jpeg";



import { Card } from '@material-ui/core';
import Item from './item';
import Carousel from "react-elastic-carousel";
import './skill.css';


function Skills() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
    return (
      <Container fluid className="about-section">
        <Container className="s">
          <h1 className="project-heading">
            Professional{" "}
            <span
              style={{
                marginLeft: "12px",
                color: "#c770f0",
              }}
            >
              Skillset{" "}
            </span>
          </h1>
          <Techstack />
          <h1 className="project-heading">
            <span
              style={{
                marginRight: "12px",
                color: "#c770f0",
              }}
            >
              Tools
            </span>{" "}
            I use
          </h1>
          <Toolstack />
        </Container>
        <h1
          style={{
            marginBottom: "-5rem",
            marginTop: "2rem",
          }}
          className="project-heading"
        >
          My{" "}
          <span
            style={{
              marginLeft: "12px",
              color: "#c770f0",
            }}
          >
            Achievement{" "}
          </span>
        </h1>
        <div className="a">
          <Carousel breakPoints={breakPoints}>
            <Item className="b">
              <img src={Isro} />
            </Item>
            <Item className="b">
              <img src={app} />
            </Item>
            <Item className="b">
              <img src={work} />
            </Item>
            <Item className="b">
              <img src={intern} />
            </Item>
            <Item className="b">
              <img src={Ibm} />
            </Item>
            <Item className="b">
              <img src={fest} />
            </Item>
            <Item className="b">
              <img src={aws} />
            </Item>
            <Item className="b">
              <img src={Ai} />
            </Item>
            <Item className="b">
              <img src={Security} />
            </Item>
            <Item className="b">
              <img src={google} />
            </Item>
          </Carousel>
        </div>
      </Container>
    );
}

export default Skills;