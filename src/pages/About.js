import React from "react";
import img1 from "./1.jpg";
import Contect from "./Contect";
const AboutUs = () => {
  return (
    <div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Bharat News! We are your reliable source for the latest
          news and updates. Our mission is to deliver accurate and timely
          information to our readers, keeping them informed about the world
          around them.
        </p>
        <p>
          Our dedicated team of journalists and reporters works tirelessly to
          bring you news from various domains including politics, business,
          technology, sports, and more. We strive to provide unbiased and
          comprehensive coverage to help you stay informed and make informed
          decisions.
        </p>
        <p>
          Thank you for choosing Bharat News as your go-to source for news. Stay
          connected with us to stay updated with the latest happenings.
        </p>

        <div className="About-Contect">
          <Contect />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
