import React from "react";
import Particle from "../../../components/Particles/Particle";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../Home/Type";

function Projects () {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Right",
        alignItems: "Right",
        height: "100vh",
      }}
    >
      <Particle />
      <h1>Project</h1>
    </div>
  );
};

export default Projects;
