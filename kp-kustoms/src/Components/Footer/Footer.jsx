import "./Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__links">
        <Link to={"/Contact"} className="footer__linkStyle">
          <li className="footer__link">Contact</li>
        </Link>
        <Link to={"/FAQ"} className="footer__linkStyle">
          <li className="footer__link">FAQ</li>
        </Link>
        <Link to={"/"} className="footer__linkStyle">
          <li className="footer__link footer__link--logo">KP Kustoms</li>
        </Link>
        <Link
          target="_blank"
          to={"https://www.instagram.com/kpkustomsca/"}
          className="footer__linkStyle"
        >
          <Instagram className="footer__icon" alt="Instagram Logo" />
        </Link>
        <Link
          target="_blank"
          to={"https://www.facebook.com/profile.php?id=100089960448366"}
          className="footer__linkStyle"
        >
          <Facebook className="footer__icon" alt="Facebook Logo" />
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
