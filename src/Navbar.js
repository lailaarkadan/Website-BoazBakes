import React from "react";
import { links } from "./data";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="menue-bar-box">
        <div className="menue-bar-content ">
        <div className="logo-container">
          <img src="/images/logo.png" className="logo" alt="logo" />
        </div>
        <a href="#" className="drop-down">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        
          
        </a>

        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
