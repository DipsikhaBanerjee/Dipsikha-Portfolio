import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../Assets/c.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./home.css";
import { Card } from "@material-ui/core";

function Home2() {
  return (
    <section>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "3rem",
          marginTop: "-10rem" }}>
            LET ME <span className="p"> INTRODUCE </span> MYSELF
          </h1>
          <div
            style={{
              display: "flex",
              margin: "1rem",
            }}
          >
            <Card
              style={{
                marginBottom: "14rem",
                marginLeft: "3rem",
                marginRight: "2rem",
                marginTop: "4rem",
                padding: "5rem",
                boxShadow: "0 0 25px yellow",
                borderRadius: "2rem",
                width: "auto",
                height: "auto",
                background: "transparent",
              }}
            >
              <p className="home-about-body">
                I am a pre-final year student from Dr. B. C. Roy Engineering
                College Durgapur. I am pursuing Bachelor Of Technology in the
                field of Computer Science And Engineering.
                <br />
                <br />I am known to the languages like
                <b className="p"> C, Java and Python. </b>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <b className="p">Web Technologies and Products </b> and also in
                areas related to{" "}
                <b className="p">
                  Mobile App Development (Specially Android App Development).
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="p">React Native</b> and
                <b className="p"> Modern Javascript Library and Frameworks</b>
                &nbsp; like
                <b className="p"> React.js </b>
              </p>
            </Card>
            <div className="myAvtar">
              <img src={myImg} className="img-f" alt="avatar" />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <div
            style={{
              marginBottom: "3rem",
            }}
          >
            <h1
              style={{
                fontSize: "4em",
                marginBottom: "2px",
                marginTop: "-2rem",
              }}
            >
              FIND ME ON
            </h1>
            <p style={{
              fontSize: "1.7rem"
            }}>
              Feel free to <span className="p">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DipsikhaBanerjee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/DipsikhaBanerj9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dipsikha-banerjee-61ba29200/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/style_n_tips_by_sikha/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
}
export default Home2;
