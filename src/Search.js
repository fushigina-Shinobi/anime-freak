import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Search() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [item, setItem] = useState([]);
  const searchAnime = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${text}`);
      const searchData = await res.json();
      const { data } = searchData;
      if (data) {
        setItem(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (text.length) {
      searchAnime();
      setError("");
    } else {
      setItem([]);
      setError("Search box can't be empty!!");
    }
  }

  // if (!loading) return <h2>LOADING...</h2>;
  // if (error) return <h3>ERROR..</h3>;
  return (
    <div className="mx-auto text-center mt-4">
      <Form onSubmit={handleSubmit} className="d-inline-flex mx-auto ">
        <Form.Control
          type="text"
          placeholder="Search Here"
          className="me-1 form-control"
          aria-label="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </Form>
      {error && <h3>{error}</h3>}
      {text && <p>We are Under Development. Some Features May Not Work</p>}
      <Container className="mt-5 g-0">
        <Card style={{ border: "none" }}>
          <Row className="g-0 justify-content-center gap-3">
            {item.map((el, i) => {
              return (
                <Col
                  className="gy-2 border border-2 rounded col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 shadow-sm mb-4 bg-white"
                  key={i}
                >
                  <div>
                    <Card.Img
                      variant="top"
                      src={el.images.jpg.image_url}
                      alt={el.title}
                      style={{ height: "25rem" }}
                    />
                    <Card.Body>
                      <Card.Title>{el.title.substring(0, 20)}...</Card.Title>
                      <Card.Subtitle className="mb-3">
                        Episodes - {el.episodes}
                      </Card.Subtitle>
                      <Card.Text style={{ height: "7rem", objectFit: "cover" }}>
                        {el.synopsis?.substring(0, 100)}...
                      </Card.Text>
                      <Button variant="primary">Details</Button>
                    </Card.Body>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Search;
