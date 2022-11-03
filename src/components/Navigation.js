import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation({ setCurrentPage }) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                setCurrentPage("About");
              }}
              href="#home"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setCurrentPage("Project");
              }}
              href="#portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setCurrentPage("Contact");
              }}
              href="#contact"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setCurrentPage("Resume");
              }}
              href="#resume"
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              {/* <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a> */}
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
