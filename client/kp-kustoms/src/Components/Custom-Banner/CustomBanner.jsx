import "./CustomBanner.scss";
import arrowRight from "../../assets/icons/arrow-right.svg";

function CustomBanner() {
  return (
    <div className="customBanner">
      <h2 className="customBanner__title">Want something custom?</h2>
      <div className="customBanner__container">
        <img
          className="customBanner__icon"
          src={arrowRight}
          alt="Arrow pointing right"
        ></img>

        <h4 className="customBanner__subtitle">Inquire here</h4>
      </div>
    </div>
  );
}

export default CustomBanner;
