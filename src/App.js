import React from "react";
import "./App.css";

import TheNavbar from "./components/TheNavbar.js";

import Toast from "react-bootstrap/Toast";

import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home.js";
import Newsletter from "./views/Newsletter.js";
import AboutMe from "./views/AboutMe.js";
import Contact from "./views/Contact.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Just to see what was passed...
    console.log(props);

    this.state = { showToast: false };
  }

  updateToast = (event) => {
    event.preventDefault();
    this.setState({ showToast: true });
  };

  disableToast = () => {
    this.setState({ showToast: false });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <TheNavbar />

          <Toast
            style={{
              alignContent: "center",
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

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/newsletter">
              <Newsletter />
            </Route>

            <Route exact path="/about-me">
              <AboutMe />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
