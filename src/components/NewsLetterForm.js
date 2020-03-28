import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class NewsLetterForm extends React.Component {
  render() {
    return (
      <>
        <h5>Newsletter</h5>

        <Form onSubmit={this.props.onSubmitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter your Email for my newsletter!</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Stay up to date with my latest projects and blog posts!
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Subscribe now!
          </Button>
        </Form>
      </>
    );
  }
}
