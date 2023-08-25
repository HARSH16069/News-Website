import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
const Searchimg = () => {
  const [message, setMessage] = useState("");
  let url = `https://newsapi.org/v2/everything?q=${message}&from=2023-08-025&sortBy=popularity&apiKey=6ba55b78e59b49a6a1038c9a34452e1a`;
  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:" + message);
  };
  return (
    <div>
      <div className="Img12">
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
          placeholder="Enter Anythings"
        ></input>
        <AiOutlineSearch className="search" />
      </div>
      <Card url={url} />
    </div>
  );
};

export default Searchimg;
