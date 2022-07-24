import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Fetch from "./useFetch";

function Search() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [item, setItem] = useState([]);
  const { loading, setLoading } = Fetch();
  const searchAnime = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${text}`);
      const searchData = await res.json();
      const { data } = searchData;
      if (data) {
        setItem(data);
      }
      setLoading(false);
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
    <div>
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
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </Form>
      {error && <h3>{error}</h3>}
      {item.map((e, i, arr) => {
        return <div key={i}>{e.title}</div>;
      })}
    </div>
  );
}

export default Search;
