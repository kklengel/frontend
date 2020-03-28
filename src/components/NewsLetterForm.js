import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default class NewsLetterForm extends React.Component {
  renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Subscribe!
      </Tooltip>
    );
  }

  render() {
    return (
      <>
        <h5>Newsletter</h5>

        <Form onSubmit={this.props.onSubmitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter your Email for my newsletter!</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              autoComplete="off"
            />
            <Form.Text className="text-muted">
              Stay up to date with my latest projects and blog posts!
            </Form.Text>
          </Form.Group>

          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={this.renderTooltip}
          >
            <Button variant="success" type="submit">
              Subscribe now!
            </Button>
          </OverlayTrigger>
        </Form>
      </>
    );
  }
}
