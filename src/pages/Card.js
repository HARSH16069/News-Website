import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    fetchInfo();
  }, [props.url]); // fetch  the data when   update
  const fetchInfo = () => {
    return fetch(props.url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  return (
    <div>
      <div className="allcards">
        {data.articles &&
          data.articles.map((apidata, index) => (
            <div className="card" key={index}>
              <img
                src={apidata.urlToImage}
                alt={apidata.title}
                className="cardimg"
              />
              <center>
                <h2 className="Title">{apidata.title}</h2>
                <p className="Description">{apidata.description}</p>
              </center>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
