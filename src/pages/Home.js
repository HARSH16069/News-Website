import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import img from "./1.jpg";
const Home = (props) => {
  const url =
    "https://newsapi.org/v2/everything?q=Apple&from=2023-08-026&sortBy=popularity&apiKey=6ba55b78e59b49a6a1038c9a34452e1a";
  return (
    <div>
      <div className="Home-flex">
        <div className="text">
          <h1>Title: Iphone</h1>
          <h4>
            Discription: Apple iphone ceo removing lighting cable and add C Type
            because the Europe ban the lighting cable.But apple want to make
            money so they give MFI Certified for their iphone
          </h4>
          <div className="TOP">
            <a href="" className="home-linktoimg">
              IMG
            </a>
          </div>
        </div>
        <img src={img} className="Home-img" />
      </div>
      <div className="news">
        Welcome to our News,There is a example of Apple
      </div>
      <Card url={url} />
    </div>
  );
};

export default Home;
