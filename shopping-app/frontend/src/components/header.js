import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function header() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Kuroneko Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">
                <i className="fas fa-shopping-cart"></i>
                &nbsp; Cart
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fas fa-users"></i>
                &nbsp; Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
