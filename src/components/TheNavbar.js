import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "./logo.png";
import { FaGithub, FaJs } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

export default class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="My logo"
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/newsletter">
              <Nav.Link>Newsletter</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Games">
              <NavDropdown.Item href="/games/ld46">
                Ludum Dare 46 - Bullet Blocker <FaJs />
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Projects">
              <NavDropdown.Item
                target="_blank"
                href="https://github.com/kklengel/ld46"
              >
                Ludum Dare 46 - Bullet Blocker <FaJs />
              </NavDropdown.Item>
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
              <NavDropdown.Item
                target="_blank"
                href="https://github.com/kklengel/frontend"
              >
                This Page itself <FaGithub />
              </NavDropdown.Item>
            </NavDropdown>

            <LinkContainer to="/about-me">
              <Nav.Link>About me</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
