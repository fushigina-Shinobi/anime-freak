import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
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
  return { movies, loading, error };
};

export default useFetch;
