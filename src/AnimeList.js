import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SingleAnime from "./SingleAnime";
import { Link } from "react-router-dom";

const AnimeList = () => {
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
  if (loading) return <h2 className="text-center">LOADING...</h2>;
  if (error) return <h3>ERROR..</h3>;
  return (
    <Container className="g-0">
      <Card style={{ border: "none" }}>
        <Row className="g-0 justify-content-center gap-3">
          <h1 className="text-center mt-4" style={{ maxWidth: "90%" }}>
            Popular Anime
          </h1>
          {anime.map((e) => {
            return (
              <Col
                className="gy-2 border border-2 rounded col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 shadow-sm mb-4 bg-white"
                key={e.mal_id}
              >
                <div>
                  <Card.Img
                    variant="top"
                    src={e.images.jpg.image_url}
                    alt={e.title}
                    style={{ height: "25rem", objectFit: "cover" }}
                    className="img-fluid img-responsive"
                  />
                  <Card.Body>
                    <Card.Title className="mb-3">
                      {e.title.substring(0, 20)}...
                    </Card.Title>
                    <Card.Text style={{ height: "7rem" }}>
                      {e.synopsis.substring(0, 100)}...
                    </Card.Text>
                    <Link to={`/singleanime/${e.mal_id}`}>
                      <Button variant="primary">Details</Button>
                    </Link>
                  </Card.Body>
                </div>
              </Col>
            );
          })}
        </Row>
      </Card>
      <SingleAnime anime={anime} />;
    </Container>
  );
};

export default AnimeList;
