import React, { useState } from 'react';
import { useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    try {
        const res = await fetch(url);
    const data = await res.json();
    if(data) {     
    setData(data)
    }
    setLoading(false)
    } catch (err) {
        setError(err)
    }
  },[url]);
  return {data, loading, error};
}

export default useFetch
