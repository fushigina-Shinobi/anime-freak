import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Fetch from "./useFetch";

function Search() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);
  const { loading, error, setLoading, setError } = Fetch();
  const searchAnime = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${text}`);
      const searchData = await res.json();
      const { data } = searchData;
      if (data) {
        setLoading(false);
        setItem(data);
      }
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    searchAnime();
  }, [text]);

  function handleSubmit(e) {
    e.preventDefault();
  }
  if (loading) return <h2>LOADING...</h2>;
  return (
    <Form
      onSubmit={handleSubmit}
      className="d-inline-grid col-md-6 justify-content-center"
    >
      <Form.Control
        type="text"
        placeholder="Search Here"
        className="me-2 form-control"
        aria-label="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="outline-success">Search</Button>
      {item.map((e, i, arr) => {
        return <div key={i}>{e.title}</div>;
      })}
    </Form>
  );
}

export default Search;
