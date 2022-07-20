import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <Form className="d-inline-flex col-md-6 justify-content-center">
      <Form.Control
        type="search"
        placeholder="Search Your Favourite Anime"
        className="me-2 form-control"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

export default Search;
