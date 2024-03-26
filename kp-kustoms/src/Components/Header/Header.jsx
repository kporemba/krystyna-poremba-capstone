import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

function Header() {
  return (
    <nav className="navbar1">
      <ul className="navbar1__links">
        <Link to={"/Shop"} className="navbar1__linkStyle">
          <li className="navbar1__link">Shop</li>
        </Link>
        <Link to={"/"} className="navbar1__linkStyle">
          <li className="navbar1__link navbar1__link--logo">KP Kustoms</li>
        </Link>
        <Link to={"/Custom-Order"} className="navbar1__linkStyle">
          <li className="navbar1__link">Custom Order</li>
        </Link>
        <Link to={"/About"} className="navbar1__linkStyle">
          <li className="navbar1__link">About</li>
        </Link>
        <Link to={"/Wishlist"} className="navbar1__linkStyle">
          <Heart className="navbar__button-heart" />
        </Link>
      </ul>
    </nav>
  );
}
export default Header;
