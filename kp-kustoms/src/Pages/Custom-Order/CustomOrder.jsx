import "./CustomOrder.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import axios from "axios";

function CustomOrder() {
  const [productState, setProductState] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";
  //listing all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}inventory`);
        setProductState(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  //category options
  const categoryArr = [
    "Cardigans",
    "Hats",
    "Blankets",
    "Sweaters",
    "Accessories",
    "Bags",
    "Knit",
  ];

  //email form on submission
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "22a7-m_mCCnwCbx7t",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          return <h1>Success</h1>;
        },
        (error) => {
          console.log("FAILED...", error.text);
          return <h1>FAILED... {error.text}</h1>;
        }
      );
  };

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
            <form className="form" ref={form} onSubmit={sendEmail}>
              {/* name */}
              <label htmlFor="fullName">Full Name</label>
              <input
                required
                type="text"
                id="fullName"
                className="form__item"
                name="fullName"
                placeholder="Jane Doe"
              ></input>

              {/* email */}
              <label htmlFor="email">Email</label>
              <input
                required
                type="text"
                id="email"
                className="form__item"
                name="email"
                placeholder="jane.doe@gmail.com"
              ></input>

              {/* item type */}
              <label htmlFor="type">Item Type</label>
              <select
                required
                id="type"
                className="form__item"
                name="type"
                placeholder=""
              >
                <option>Other</option>
                {/* map of product types */}
                {categoryArr.map((category) => (
                  <option>{category}</option>
                ))}
              </select>

              {/* Description */}
              <label htmlFor="description">Order Description</label>
              <textarea
                required
                id="description"
                className="form__item form__item--description"
                name="description"
                placeholder="I'm looking for a custom sweater. I want it in rainbow and in the flower power pattern."
              ></textarea>

              {/* Measurements */}
              <label htmlFor="measurements">Measurements</label>
              <textarea
                required
                id="measurements"
                className="form__item form__item--description"
                name="measurements"
                placeholder="I need a size small. My bust is 34 inches, my waist is 27 inches and my hips are 39 inches."
              ></textarea>

              {/* product references */}
              <label htmlFor="ref">Product References</label>
              <select id="ref" className="form__item" name="ref" placeholder="">
                {/* map of available products */}
                {productState.map((product) => (
                  <option>{product.product_name}</option>
                ))}
                <option>N/A</option>
              </select>

              {/* image upload */}
              <label htmlFor="image">
                Image Reference <br />
                <i>The file must be smaller than 50kb</i>
              </label>
              <input
                type="file"
                id="image"
                className="form__item"
                name="image"
              ></input>
              <input
                type="submit"
                value="Send Custom Order Form"
                className="form__submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomOrder;

// Form submitted. Expect to hear back in 2-3 business days.
