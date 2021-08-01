import React from "react";
import { Button, Card, Input } from "@material-ui/core";
import pdf from '../../../Assets/DIPSIKHA RESUME.pdf';
import { AiOutlineDownload } from "react-icons/ai";
import Progressbar from "./progressbar";
import "./resume.css";

const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <Card className="quote-card-view">
          <h1 className="h">
            Find my{" "}
            <span
              style={{
                fontSize: "3.2rem",
                color: "#FFFBA2",
                fontFamily: "cursive",
              }}
            >
              {" "}
              Resume{" "}
            </span>{" "}
            on Clicking
          </h1>
          <Button
            style={{
              fontSize: "1rem",
              color: "white",
              margin: "4rem",
              display: "flex",
              width: "16rem",
              height: "5rem",
              justifyContent: "center",
              boxShadow: "0 0 25px #FFFBA2 ",
            }}
            variant="outlined"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Card>
      </div>
      <div className="App">
        <h3 className="heading">Progress</h3>
        <Progressbar bgcolor="orange" progress="50" height={20} />
        <Progressbar bgcolor="red" progress="60" height={20} />
        <Progressbar bgcolor="#99ff66" progress="50" height={20} />
        <Progressbar bgcolor="#ff00ff" progress="85" height={20} />
        <Progressbar bgcolor="#99ccff" progress="95" height={20} />
      </div>
    </div>
  );
};

export default Resume;
