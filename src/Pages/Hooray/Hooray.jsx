import "./Hooray.scss";
import React from "react";
import { Link } from "react-router-dom";
import Confetti from "../../Components/Confetti/Confetti";

export default function Hooray() {
  return (
    <div className="hooray">
      <Confetti />
      <h1 className="hooray__title">Hooray!</h1>
      <h2 className="hooray__subtitle">Your order is complete.</h2>
      <div className="hooray__container">
        <p className="hooray__text">
          An confirmation has been sent to your email. Another email will be
          sent when KP Kustoms begins work on your made to order crochet
          masterpiece!
        </p>
      </div>
      <div className="hooray__buttons">
        <Link to="/Home" className="hooray__link">
          <button className="hooray__button">Return home</button>
        </Link>
        <Link to="/Shop" className="hooray__link">
          <button className="hooray__button">Continue shopping</button>
        </Link>
      </div>
    </div>
  );
}
