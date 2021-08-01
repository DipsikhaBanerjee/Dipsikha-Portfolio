import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../../Assets/home-main.svg";
import Type from "./Type";
import Particle from "../../../components/Particles/Particle";
import Home2 from "./home2";
import "./home.css";

function Home() {
  return (
    <section>
      <Row>
	  <div style={{
		  display: "flex",
	  }}>
        <Col md={7} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'M
            <strong className="main-name"> DIPSIKHA BANERJEE </strong>
          </h1>
          <div style={{ padding: 50, textAlign: "left",
		  }}>
            <Type />
		  </div>
        </Col>
		
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
          />
		</div>
      </Row>
	  <Home2/>
    </section>
  );
}

export default Home;
