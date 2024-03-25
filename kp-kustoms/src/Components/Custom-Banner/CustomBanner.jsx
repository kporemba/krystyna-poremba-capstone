import "./CustomBanner.scss";
import arrowRight from "../../assets/icons/arrow-right.svg";

function CustomBanner() {
  return (
    <div className="customBanner1">
      <h2 className="customBanner1__title">Want something custom?</h2>
      <div className="customBanner1__container">
        <img
          className="customBanner1__icon"
          src={arrowRight}
          alt="Arrow pointing right"
        ></img>

        <h4 className="customBanner1__subtitle">Inquire here</h4>
      </div>
    </div>
  );
}

export default CustomBanner;
