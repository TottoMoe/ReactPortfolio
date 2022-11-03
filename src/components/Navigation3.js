import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation({ setCurrentPage }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Jenny Deng</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
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
          <button className="vvd" onClick={() => console.log("connect")}>
            <span>Let's Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
