import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{ span: 3, offset: 3 }}>
            <p style={{ textAlign: "left" }}>
              Welcome to klengel.dev ! Here you can find information about my IT
              projects as well as some fun facts and tutorials to learn
              something new!
            </p>
          </Col>
          <Col md={{ span: 3 }}>
            <b>
              {" "}
              Most of the page is still under construction! Meanwhile, enjoy a
              random cat picture!{" "}
            </b>
            <Image
              width="100%"
              height="100%"
              maxHeight="200px"
              src="https://cataas.com/cat"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
