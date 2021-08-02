import React from "react";
import Particle from "../../../components/Particles/Particle";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../Home/Type";
import "./project.css";
import google from "../../../Assets/achievement/google.jpg";

function Projects() {
  return (
    <div>
      <Particle />
      <h1 className="hd-1">My Creativities</h1>

      {/* -----------1st Row--------- */}

      <div className="row">
        <div className="card">
          <img src={google} />
          <p>
            If any missing value come it wuter =
            SimpleImputer(strategy="median") imputer.fit(housing). uifghrhesu
            sieyut gwkyrgi gaoug aWLG WOULGWal; ghbw.,H Walh;iwKHBNG
          </p>
        </div>
        <div className="card">
          <img src={google} />
          <p>
            If any missing value come it wuter =
            SimpleImputer(strategy="median") imputer.fit(housing). uifghrhesu
            sieyut gwkyrgi gaoug aWLG WOULGWal; ghbw.,H Walh;iwKHBNG
          </p>
        </div>
        <div className="card">
          <img src={google} />
          <p>
            If any missing value come it wuter =
            SimpleImputer(strategy="median") imputer.fit(housing). uifghrhesu
            sieyut gwkyrgi gaoug aWLG WOULGWal; ghbw.,H Walh;iwKHBNG
          </p>
        </div>
      </div>

      {/* -----------2nd Row--------- */}

      <div className="row">
        <div className="card">
          <img src={google} />
          <p>
            If any missing value come it wuter =
            SimpleImputer(strategy="median") imputer.fit(housing). uifghrhesu
            sieyut gwkyrgi gaoug aWLG WOULGWal; ghbw.,H Walh;iwKHBNG
          </p>
        </div>
        <div className="card">
          <img src={google} />
          <p>
            If any missing value come it wuter =
            SimpleImputer(strategy="median") imputer.fit(housing). uifghrhesu
            sieyut gwkyrgi gaoug aWLG WOULGWal; ghbw.,H Walh;iwKHBNG
          </p>
        </div>
        <div className="card">
          <img src={google} />
          <p>
            If any missing value come it wuter =
            SimpleImputer(strategy="median") imputer.fit(housing). uifghrhesu
            sieyut gwkyrgi gaoug aWLG WOULGWal; ghbw.,H Walh;iwKHBNG
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
