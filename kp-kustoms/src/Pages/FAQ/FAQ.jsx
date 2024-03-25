import "./FAQ.scss";

function FAQ() {
  function toggleVis() {
    //get the element
    var text = document.getElementById("text");

    //current value of display property
    var displaySetting = text.style.display;

    //toggle
    if (displaySetting == "block") {
      // text is visible, hide it
      text.style.display = "none";
    } else {
      //text is hiddle, show it
      text.style.display = "block";
    }
  }

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
              onClick={toggleVis}
              id="plusButton"
            >
              +
            </h3>
          </div>
          <p className="faq__text" id="text">
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
              onClick={toggleVis}
              id="plusButton"
            >
              +
            </h3>
          </div>
          <p className="faq__text" id="text">
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
              onClick={toggleVis}
              id="plusButton"
            >
              +
            </h3>
          </div>
          <p className="faq__text" id="text">
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
              onClick={toggleVis}
              id="plusButton"
            >
              +
            </h3>
          </div>
          <p className="faq__text" id="text">
            KP Kustoms runs a made-to-order business.
          </p>
        </div>
        <div className="faq__group">
          <div className="faq__top">
            <h3 className="faq__subtitle">Shipping</h3>
            <h3
              className="faq__subtitle faq__subtitle--icon"
              onClick={toggleVis}
              id="plusButton"
            >
              +
            </h3>
          </div>
          <p className="faq__text" id="text">
            Shipping is calculated at checkout. Orders over 100$ qualify for
            free shipping.
          </p>
        </div>
        <div className="faq__group">
          <div className="faq__top">
            <h3 className="faq__subtitle">Returns</h3>
            <h3
              className="faq__subtitle faq__subtitle--icon"
              onClick={toggleVis}
              id="plusButton"
            >
              +
            </h3>
          </div>
          <p className="faq__text" id="text">
            KP Kustoms is unable to process returns at this time. All sales are
            final.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
