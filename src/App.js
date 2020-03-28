import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsLetterForm from "./components/NewsLetterForm.js";
import MyNavbar from "./components/MyNavbar.js";
import Profile from "./components/Profile";

import Toast from "react-bootstrap/Toast";

import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Just to see what was passed...
    console.log(props);

    this.state = { showToast: false };
  }

  updateToast = event => {
    event.preventDefault();
    this.setState({ showToast: true });
  };

  disableToast = () => {
    this.setState({ showToast: false });
  };

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <body>
          <Container fluid>
            <Row>
              <Col>
                <Toast
                  style={{
                    alignContent: "center"
                  }}
                  className="toast"
                  onClose={() => this.disableToast()}
                  show={this.state.showToast}
                  delay={3000}
                  autohide
                  animation={true}
                >
                  <Toast.Body>
                    <IconContext.Provider
                      value={{ color: "green", className: "global-class-name" }}
                    >
                      <div>
                        <FaCheck />
                      </div>
                    </IconContext.Provider>
                    Subscription successful!
                  </Toast.Body>
                </Toast>
              </Col>
            </Row>

            <Row>
              <Col>
                <Profile />
              </Col>
            </Row>

            <Row style={{ backgroundColor: "lightgrey" }}>
              <Col>
                <NewsLetterForm onSubmitHandler={this.updateToast} />
              </Col>
            </Row>
          </Container>
        </body>
      </div>
    );
  }
}
