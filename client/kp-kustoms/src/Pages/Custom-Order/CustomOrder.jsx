import "./CustomOrder.scss";
import Hero from "../../Components/Hero/Hero";

function CustomOrder() {
  return (
    <div>
      <div className="about">
        <div className="about__hero-container">
          <Hero />
        </div>
        <h1 className="about__title">Let me make you something</h1>
        <p className="about__subtitle">
          Have an idea for a specific item? Please fill out the commission form
          below with as much detail as possible.
        </p>
        <div className="about__body-container">
          <div className="about__image-container">
            <div className="about__image"></div>
          </div>
          <div className="about__form-container">
            <form className="form">
              {/* name */}
              <label for="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="form__item"
                name="fullName"
                placeholder="First name, last name"
              ></input>

              {/* email */}
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                className="form__item"
                name="email"
                placeholder="jane.doe@gmail.com"
              ></input>

              {/* item type */}
              <label for="type">Item Type</label>
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
              <label for="description">Order Description</label>
              <textarea
                id="description"
                className="form__item form__item--description"
                name="description"
                placeholder="I'm looking for a custom sweater. I want it in rainbow and in the flower power pattern."
              ></textarea>

              {/* Measurements */}
              <label for="measurements">Measurements</label>
              <textarea
                id="measurements"
                className="form__item form__item--description"
                name="measurements"
                placeholder="I need a size small. My bust is 34 inches, my waist is 27 inches and my hips are 39 inches."
              ></textarea>

              {/* product references */}
              <label for="ref">Product References</label>
              <select id="ref" className="form__item" name="ref" placeholder="">
                {/* map of available products */}
                <option>Accessory</option>
                <option>Wearable</option>
                <option>Blanket</option>
                <option>Bag</option>
              </select>

              {/* image upload */}
              <label for="image">Image Reference</label>
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
