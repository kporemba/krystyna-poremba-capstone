import "./Contact.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container-left">
        <img
          className="contact__image"
          src="http://localhost:8080/images/contact.jpeg"
        />
      </div>
      <div className="contact__container-right">
        <h1 className="contact__title">Contact</h1>
        <p className="contact__text">poremba.krystyna@gmail.com</p>

        <h2 className="contact__subtitle">Socials</h2>
        <div className="contact__socials">
          <Link target="_blank" to={"https://www.instagram.com/kpkustomsca/"}>
            <Instagram className="contact__icon" alt="Instagram Logo" />
          </Link>
          <Link
            target="_blank"
            to={"https://www.facebook.com/profile.php?id=100089960448366"}
          >
            <Facebook className="contact__icon" alt="Facebook Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
