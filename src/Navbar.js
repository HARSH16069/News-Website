import React, { useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [update, setupdate] = useState(false);
  return (
    <div>
      <div className="Navbar">
        {/* <div className="Home-flex"> */}
        <AiOutlineMenu
          className="icon"
          onClick={() => {
            if (update == false) {
              setupdate(true);
            } else {
              setupdate(false);
            }
          }}
        ></AiOutlineMenu>
        <h1 className="logo">Bharat News</h1>
        {/* </div> */}
        <div>
          <nav>
            <ul className={update ? "nav-ul active" : "nav-ul"}>
              <li className="nav-il" onClick={() => setupdate(false)}>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-il" onClick={() => setupdate(false)}>
                <NavLink to="/Today-News">News</NavLink>
                <ul className="dropdown">
                  <li onClick={() => setupdate(false)}>
                    <NavLink to="/Today-News">Today's News</NavLink>
                  </li>
                  <li onClick={() => setupdate(false)}>
                    <NavLink to="/Sports-News">Sports News</NavLink>
                  </li>
                  <li onClick={() => setupdate(false)}>
                    <NavLink to="/Business-News">Business News</NavLink>
                  </li>
                  <li onClick={() => setupdate(false)}>
                    <NavLink to="/Health-News"> Health News</NavLink>
                  </li>
                  <li onClick={() => setupdate(false)}>
                    <NavLink to="/Science-News">Science News</NavLink>
                  </li>
                  <li onClick={() => setupdate(false)}>
                    <NavLink to="/Entertainment-News">
                      Entertainment News
                    </NavLink>
                  </li>
                  {/* Add more dropdown items as needed */}
                </ul>
              </li>
              <li className="nav-il" onClick={() => setupdate(false)}>
                <NavLink to="/Search-News">Search News</NavLink>
              </li>
              <li className="nav-il" onClick={() => setupdate(false)}>
                <NavLink to="/Live-TV">Live TV</NavLink>
              </li>
              <li className="nav-il" onClick={() => setupdate(false)}>
                <NavLink to="/About-us">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="navbar-news">
        SomeOne's iPhone was lost in the lake; the governor removed 200,000
        liters of water for the phone.
      </div>
    </div>
  );
};

export default Navbar;
