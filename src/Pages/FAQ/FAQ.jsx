import "./FAQ.scss";
import { useState } from "react";

function FAQ() {
  const defaultVisibillity = false;
  const [visible, setVisible] = useState({});

  const isVisible = (id) => visible[id] || defaultVisibillity;

  //control dropdown
  const handleClick = (id) => () => {
    setVisible({ ...visible, [id]: !isVisible(id) });
  };

  return (
    <div className="faq">
      <div className="faq__container-left">
        <img
          className="faq__image"
          src="http://localhost:8080/images/faq.jpeg"
          alt="Rubiks cube deconstructed"
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
            Handwashing is suggested on all products. Use a gentle, mild soap
            like Soak in lukewarm water for 20 minutes. I also suggest using a
            tablespoon of vinegar if the garment is itchy or develops a smell.
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
            KP Kustoms can make garments in any size. Depending on the size of
            the project, cost in materials may go up. Measurements are best
            taken using a soft tape measure or string. This will allow me to get
            the most accurate sizing to create custom products.
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
            KP Kustoms runs a made-to-order business. This means that it will
            take approximately 1-2 weeks for your order to be ready for
            shipping.
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
