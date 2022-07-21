import { useState, useEffect } from "react";

const Fetch = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setMovies(data);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);
  return { movies, loading, error, setLoading, setError };
};

export default Fetch;
