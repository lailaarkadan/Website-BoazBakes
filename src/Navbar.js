import React from "react";
import { links } from "./data";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="menue-bar-box">
        <div className="logo-container">
          <img src="/images/logo.png" className="logo" alt="logo" />
        </div>

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
    </nav>
  );
};
export default Navbar;
