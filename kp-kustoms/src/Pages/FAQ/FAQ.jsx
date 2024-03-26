import "./FAQ.scss";
import { useState } from "react";

function FAQ() {
  const defaultVisibillity = false;
  const [visible, setVisible] = useState({});

  const isVisible = (id) => visible[id] || defaultVisibillity;

  const handleClick = (id) => () => {
    setVisible({ ...visible, [id]: !isVisible(id) });
  };

  return (
    <div className="faq">
      <div className="faq__container-left">
        <img
          className="faq__image"
          src="http://localhost:8080/images/faq.jpeg"
        />
      </div>
      <div className="faq__container-right">
        <h1 className="faq__title">FAQ</h1>
        <div className="faq__group">
          <div className="faq__top">
            <h3 className="faq__subtitle">Materials</h3>
            <h3
              className="faq__subtitle faq__subtitle--icon"
              onClick={handleClick(1)}
            >
              +
            </h3>
          </div>
          <p id={1} className={!isVisible(1) ? "hide" : "faq__text"}>
            KP Kustoms uses a varitey of materials. Ranging from wool to acrylic
            to cotton, each piece can be made in the material of your choice.
            Fill out a custom order form to change the default material.
          </p>
        </div>
        <div className="faq__group">
          <div className="faq__top">
            <h3 className="faq__subtitle">Care Instruction</h3>
            <h3
              className="faq__subtitle faq__subtitle--icon"
              onClick={handleClick(2)}
            >
              +
            </h3>
          </div>
          <p id={2} className={!isVisible(2) ? "hide" : "faq__text"}>
            KP Kustoms uses a varitey of materials. Ranging from wool to acrylic
            to cotton, each piece can be made in the material of your choice.
            Fill out a custom order form to change the default material.
          </p>
        </div>
        <div className="faq__group">
          <div className="faq__top">
            <h3 className="faq__subtitle">Sizing</h3>
            <h3
              className="faq__subtitle faq__subtitle--icon"
              onClick={handleClick(3)}
            >
              +
            </h3>
          </div>
          <p id={3} className={!isVisible(3) ? "hide" : "faq__text"}>
            KP Kustoms uses a varitey of materials. Ranging from wool to acrylic
            to cotton, each piece can be made in the material of your choice.
            Fill out a custom order form to change the default material.
          </p>
        </div>
        <div className="faq__group">
          <div className="faq__top">
            <h3 className="faq__subtitle">Made-to-order</h3>
            <h3
              className="faq__subtitle faq__subtitle--icon"
              onClick={handleClick(4)}
            >
              +
            </h3>
          </div>
          <p id={4} className={!isVisible(4) ? "hide" : "faq__text"}>
            KP Kustoms runs a made-to-order business.
          </p>
        </div>
        <div className="faq__group">
          <div className="faq__top">
            <h3 className="faq__subtitle">Shipping</h3>
            <h3
              className="faq__subtitle faq__subtitle--icon"
              onClick={handleClick(5)}
            >
              +
            </h3>
          </div>
          <p id={5} className={!isVisible(5) ? "hide" : "faq__text"}>
            Shipping is calculated at checkout. Orders over 100$ qualify for
            free shipping.
          </p>
        </div>
        <div className="faq__group">
          <div className="faq__top">
            <h3 className="faq__subtitle">Returns</h3>
            <h3
              className="faq__subtitle faq__subtitle--icon"
              onClick={handleClick(6)}
            >
              +
            </h3>
          </div>
          <p id={6} className={!isVisible(6) ? "hide" : "faq__text"}>
            KP Kustoms is unable to process returns at this time. All sales are
            final.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
