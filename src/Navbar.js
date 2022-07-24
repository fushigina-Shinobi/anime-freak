import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-4 mx-auto">
      <Container className="justify-content-space-between">
        <Navbar.Brand href="#">Anime Freak</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <Link to="/" className="list-group-item">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="/animelist">
              <Link to="/popular" className="list-group-item">
                Popular
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
