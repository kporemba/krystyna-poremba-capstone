import "./CustomOrder.scss";

function CustomOrder() {
  return (
    <div>
      <div className="customOrder">
        <div className="customOrder__hero-container">
          <img
            className="customOrder__header"
            src="http://localhost:8080/images/custom-header.jpeg"
          />
        </div>
        <h1 className="customOrder__title">Let me make you something</h1>
        <p className="customOrder__subtitle">
          Have an idea for a specific item? Please fill out the commission form
          below with as much detail as possible.
        </p>
        <div className="customOrder__body-container">
          <div className="customOrder__image-container">
            <img
              className="customOrder__image"
              src="http://localhost:8080/images/custom-single.jpeg"
            />
          </div>
          <div className="customOrder__form-container">
            <form className="form">
              {/* name */}
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="form__item"
                name="fullName"
                placeholder="First name, last name"
              ></input>

              {/* email */}
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="form__item"
                name="email"
                placeholder="jane.doe@gmail.com"
              ></input>

              {/* item type */}
              <label htmlFor="type">Item Type</label>
              <select
                id="type"
                className="form__item"
                name="type"
                placeholder=""
              >
                <option>Accessory</option>
                <option>Wearable</option>
                <option>Blanket</option>
                <option>Bag</option>
              </select>

              {/* Description */}
              <label htmlFor="description">Order Description</label>
              <textarea
                id="description"
                className="form__item form__item--description"
                name="description"
                placeholder="I'm looking for a custom sweater. I want it in rainbow and in the flower power pattern."
              ></textarea>

              {/* Measurements */}
              <label htmlFor="measurements">Measurements</label>
              <textarea
                id="measurements"
                className="form__item form__item--description"
                name="measurements"
                placeholder="I need a size small. My bust is 34 inches, my waist is 27 inches and my hips are 39 inches."
              ></textarea>

              {/* product references */}
              <label htmlFor="ref">Product References</label>
              <select id="ref" className="form__item" name="ref" placeholder="">
                {/* map of available products */}
                <option>Accessory</option>
                <option>Wearable</option>
                <option>Blanket</option>
                <option>Bag</option>
              </select>

              {/* image upload */}
              <label htmlFor="image">Image Reference</label>
              <input
                type="file"
                id="image"
                className="form__item"
                name="image"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomOrder;

// Form submitted. Expect to hear back in 2-3 business days.
