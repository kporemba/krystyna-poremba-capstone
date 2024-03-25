import "./FAQ.scss";

function FAQ() {
  return (
    <div className="faq">
      <div className="faq__container-left">
        {/* <div className="faq__image"></div> */}
        <img
          className="faq__image"
          src="http://localhost:8080/images/faq.jpeg"
        />
      </div>
      <div className="faq__container-right">
        <h1 className="faq__title">FAQ</h1>
        <select id="type" className="form__item" name="type" placeholder="">
          <option>Accessory</option>
        </select>
      </div>
    </div>
  );
}

export default FAQ;
