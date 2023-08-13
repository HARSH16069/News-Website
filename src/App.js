import React from "react";
// import { ReactDOM } from "react";
// import { Browse Has} from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { News } from "./pages/News";
import Searchimg from "./pages/Searchimg";
import Effect from "./Effect";
import About from "./pages/About";
import Sports from "./pages/Sports";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Science from "./pages/Science";

let App = () => {
  return (
    <div>
      <Effect />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Today-News" element={<News />} />
        <Route path="/Sports-News" element={<Sports />} />
        <Route path="/Business-News" element={<Business />} />
        <Route path="/Entertainment-News" element={<Entertainment />} />
        <Route path="/Health-News" element={<Health />} />
        <Route path="/Science-News" element={<Science />} />
        <Route path="/Search-News" element={<Searchimg />} />
        <Route path="/Live-TV" element={<Home />} />
        <Route path="/About-us" element={<About />} />
      </Routes>
    </div>
  );
};
export default App;
