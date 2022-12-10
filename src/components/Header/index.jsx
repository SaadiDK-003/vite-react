import React from "react";
import { Link } from "react-router-dom";
import HeaderLinks from "./links.config";

const Header = () => {
  const headerlinks = HeaderLinks.map((link, index) => (
    <li key={index}>
      <Link to={link.url}>{link.title}</Link>
    </li>
  ));

  return (
    <header>
      <div className="logo">
        <h3>Home</h3>
      </div>
      <nav>
        <ul>{headerlinks}</ul>
      </nav>
    </header>
  );
};

export default Header;
