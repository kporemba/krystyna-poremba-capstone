import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <Link to={"/Shop"} className="navbar__linkStyle">
          <li className="navbar__link">Shop</li>
        </Link>
        <Link to={"/"} className="navbar__linkStyle">
          <li className="navbar__link navbar__link--logo">KP Kustoms</li>
        </Link>
        <Link to={"/Custom-Order"} className="navbar__linkStyle">
          <li className="navbar__link">Custom Order</li>
        </Link>
        <Link to={"/About"} className="navbar__linkStyle">
          <li className="navbar__link">About</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Header;
