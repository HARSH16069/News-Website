import React from "react";
import Card from "./Card";

const Science = () => {
  let url =
    "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6ba55b78e59b49a6a1038c9a34452e1a";
  return (
    <div>
      <Card url={url} />
    </div>
  );
};

export default Science;
