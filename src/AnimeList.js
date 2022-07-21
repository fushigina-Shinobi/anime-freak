import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const AnimeList = () => {
  // const [text, setText] = useState("Naruto");
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
        const allData = await res.json();
        // console.log(data)
        const { data } = allData;
        if (data) {
          setAnime(data);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);
  if (loading) return <h2>LOADING...</h2>;
  if (error) return <h3>ERROR..</h3>;
  return (
    <Card style={{ width: "15rem" }}>
      <Container className="grid">
        <Row className="justify-content-md-center">
          {anime.map((e) => {
            return (
              <Col md="auto">
                <div key={e.mal_id}>
                  <h4>POPULAR ANIME</h4>
                  <Card.Img
                    variant="top"
                    src={e.images.jpg.image_url}
                    alt={e.title}
                  />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.synopsis}</Card.Text>
                    <Button variant="primary">Details</Button>
                  </Card.Body>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Card>
  );
};

export default AnimeList;
