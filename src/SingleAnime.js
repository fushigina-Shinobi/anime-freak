import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleAnime = ({ anime }) => {
  const [list, setList] = useState(anime);
  const { animeId } = useParams();
  // console.log("params", useParams());
  const animeOne = list?.find(
    (item) => String(item.mal_id) === String(animeId)
  );
  const [items, setItems] = useState(animeOne);
  console.log(items);
  return (
    <div className="container">
      <div key={items?.id}>
        <h1>{items?.title}</h1>
      </div>
    </div>
  );
};

export default SingleAnime;
