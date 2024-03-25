import "./Footer.scss";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__links">
        <li className="footer__link">Contact</li>
        <li className="footer__link">FAQ</li>
        <li className="footer__link footer__link--logo">KP Kustoms</li>
        <img
          className="footer__icon"
          src={instagram}
          alt="Instagram Logo"
        ></img>
        <img className="footer__icon" src={facebook} alt="Facebook Logo"></img>
      </ul>
    </div>
  );
}

export default Footer;
