import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-4">
      <Container>
        <Navbar.Brand href="#">Anime Freak</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to="/" className="list-group-item me-4">
              Home
            </Link>
            <Link to="/popular" className="list-group-item">
              Popular
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
