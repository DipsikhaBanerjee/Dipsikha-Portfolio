import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Dipsikha Banerjee</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DB</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
