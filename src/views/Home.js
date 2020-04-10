import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Profile from "../components/Profile";

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ border: "1px solid green" }}>
          <Col md={{ span: 3, offset: 3 }} style={{ border: "1px solid red" }}>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amat, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </Col>
          <Col md={{ span: 3 }} style={{ border: "1px solid blue" }}>
            <Image src="https://cataas.com/cat" />
          </Col>
        </Row>
      </Container>
    );
  }
}
