import React from "react";
import Card from "./Card";

export const News = (props) => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=6ba55b78e59b49a6a1038c9a34452e1a";
  return (
    <div>
      <div className="news">Welcome to our Today News</div>
      <Card url={url} />
    </div>
  );
};
