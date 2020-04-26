import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsLetterForm from "../components/NewsLetterForm.js";

export default class Newsletter extends React.Component {
  render() {
    return (
      <Container fluid>
        <i>Currently work in progress! Entering email will not do anything!</i>

        <Row style={{ backgroundColor: "lightgrey" }}>
          <Col>
            <NewsLetterForm onSubmitHandler={this.updateToast} />
          </Col>
        </Row>
      </Container>
    );
  }
}
