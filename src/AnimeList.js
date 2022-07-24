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
    <Container>
      <Card style={{ border: "none" }}>
        <Row className="gx-4">
          <h1 className="text-center">Popular Anime</h1>
          {anime.map((e) => {
            return (
              <Col className="col-3 gy-2" key={e.mal_id}>
                <div>
                  <Card.Img
                    variant="top"
                    src={e.images.jpg.image_url}
                    alt={e.title}
                    style={{ height: "25rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{e.title.substring(0, 20)}...</Card.Title>
                    <Card.Text>{e.synopsis.substring(0, 100)}...</Card.Text>
                    <Button variant="primary">Details</Button>
                  </Card.Body>
                </div>
              </Col>
            );
          })}
        </Row>
      </Card>
    </Container>
  );
};

export default AnimeList;
