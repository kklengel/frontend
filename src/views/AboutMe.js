import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class AboutMe extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1> About me</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
