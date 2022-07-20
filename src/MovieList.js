import React, { useState } from "react";
import useFetch from "./useFetch";
import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieList = () => {
  const [anime, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const { movies, loading, error } = useFetch(
    "https://ghibliapi.herokuapp.com/films"
  );

  const GetTopAnime = async () => {
    const res = await fetch(
      "https://api.jikan.moe/v4/top/anime/1/bypopularity"
    );
  };

  if (loading) return <h2>LOADING...</h2>;
  if (error) return <h3>ERROR..</h3>;
  return (
    <div className="card-container">
      {movies.map((el) => {
        return (
          <section key={el.id}>
            <article>
              <h3>English Title : {el.title}</h3>
              <h2>Original Title : {el.original_title_romanised}</h2>
              <h4>Director : {el.director}</h4>
              <p>Plot : {el.description}</p>
              <p>Year : {el.release_date}</p>
              <p>Run Time : {el.running_time}</p>
            </article>
          </section>
        );
      })}
    </div>
  );
};

export default MovieList;
