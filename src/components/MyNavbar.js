import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "./logo.png";
import { FaGithub } from "react-icons/fa";

export default class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="My logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#newsletter">Newsletter</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://github.com/kklengel/tictactoe"
              >
                TicTacToe <FaGithub />
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://github.com/kklengel/keygo"
              >
                Keygo <FaGithub />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled href="#home">
                Coming soon...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
