import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import logo from "../../assets/icons/KPKustoms.jpeg";

function Header({ cartTotal }) {
  return (
    <nav className="navbar1">
      <ul className="navbar1__links">
        <Link to={"/Shop"} className="navbar1__linkStyle">
          <li className="navbar1__link">Shop</li>
        </Link>
        <Link to={"/"} className="navbar1__linkStyle">
          <img className="navbar1__link-logo" src={logo} alt="Logo" />
        </Link>
        <Link to={"/Custom-Order"} className="navbar1__linkStyle">
          <li className="navbar1__link">Custom Order</li>
        </Link>
        <Link to={"/About"} className="navbar1__linkStyle">
          <li className="navbar1__link">About</li>
        </Link>
        <Link to={"/Wishlist"} className="navbar1__linkStyle">
          <Heart className="navbar1__button-heart" />
        </Link>
        <Link to={"/Cart"} className="navbar1__linkStyle">
          <div className="navbar1__group">
            <Cart className="navbar1__button-cart" />
            <li className="navbar1__link navbar1__link--cart">{cartTotal}</li>
          </div>
        </Link>
      </ul>
    </nav>
  );
}
export default Header;
