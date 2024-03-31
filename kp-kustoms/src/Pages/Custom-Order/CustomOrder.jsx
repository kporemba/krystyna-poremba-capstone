import "./CustomOrder.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import errorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";

function CustomOrder() {
  const [productState, setProductState] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";
  const [errors, setErrors] = useState({}); //form validation
  const form = useRef();
  const [modalVisible, setModalVisible] = useState(false);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //category options
  const categoryArr = [
    "Cardigans",
    "Hats",
    "Blankets",
    "Sweaters",
    "Accessories",
    "Dresses",
    "Bags",
    "Knit",
  ];

  //form validation
  const validateForm = () => {
    const newErrors = {};

    if (!form.current.fullName.value) {
      newErrors.fullName = "Full Name is required"; //name validation
    }
    if (!form.current.email.value) {
      newErrors.email = "Email is required"; //email validation
    } else if (
      !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(
        form.current.email.value
      )
    ) {
      newErrors.email = "Invalid email format"; //email format validation
    }
    if (!form.current.description.value) {
      newErrors.description = "A description of your custom order is required"; //description validation
    }
    if (!form.current.measurements.value) {
      newErrors.measurements =
        "An approximate measurement of desired product is required"; //measurements validation
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  //email form on submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    emailjs.sendForm("contact_service", "contact_form", form.current, {
      publicKey: "22a7-m_mCCnwCbx7t",
    });
    try {
      setModalVisible(true); //setting modal visible
    } catch (error) {
      console.log("FAILED...", error.text);
    }
  };

  return (
    <div>
      <div className="customOrder">
        <div className="customOrder__hero-container">
          <img
            className="customOrder__header"
            src="http://localhost:8080/images/custom-header.jpeg"
            alt="custom item in progress"
          />
        </div>

        <h1 className="customOrder__title">let me make you something</h1>
        <p className="customOrder__subtitle">
          Have an idea for a specific item? Please fill out the commission form
          below with as much detail as possible.
        </p>

        <div className="customOrder__body-container">
          <div className="customOrder__image-container">
            <img
              className="customOrder__image"
              src="http://localhost:8080/images/custom-single.jpeg"
              alt="Model showing clothes"
            />
          </div>

          <div className="customOrder__form-container">
            <form className="form" ref={form} onSubmit={sendEmail}>
              {/* name */}
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                className={errors.fullName ? "form__item--error" : "form__item"}
                name="fullName"
                placeholder="Jane Doe"
              ></input>
              {errors.fullName && (
                <span className="error">
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="error__icon"
                  />
                  <p className="error__text">{errors.fullName}</p>
                </span>
              )}

              {/* email */}
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className={errors.email ? "form__item--error" : "form__item"}
                name="email"
                placeholder="jane.doe@gmail.com"
              ></input>
              {errors.email && (
                <span className="error">
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="error__icon"
                  />
                  <p className="error__text">{errors.email}</p>
                </span>
              )}

              {/* item type */}
              <label htmlFor="type">Item Type</label>
              <select
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
                id="description"
                className={
                  errors.description
                    ? "form__item--error"
                    : "form__item-description"
                }
                name="description"
                placeholder="I'm looking for a custom sweater. I want it in rainbow and in the flower power pattern."
              ></textarea>
              {errors.description && (
                <span className="error">
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="error__icon"
                  />
                  <p className="error__text">{errors.description}</p>
                </span>
              )}

              {/* Measurements */}
              <label htmlFor="measurements">Measurements</label>
              <textarea
                id="measurements"
                className={
                  errors.measurements
                    ? "form__item--error"
                    : "form__item-description"
                }
                name="measurements"
                placeholder="I need a size small. My bust is 34 inches, my waist is 27 inches and my hips are 39 inches."
              ></textarea>
              {errors.measurements && (
                <span className="error">
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="error__icon"
                  />
                  <p className="error__text">{errors.measurements}</p>
                </span>
              )}

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

              {/* form submission */}
              <input
                type="submit"
                value="Send Custom Order Form"
                className="form__submit"
              />
            </form>

            {/* //complete modal */}
            {modalVisible && (
              <div className="modal">
                <div className="modal__top">
                  {/* <div className="modal__rainbow"> */}
                  <h2 className="modal__title">
                    Your custom order form has been submitted!
                  </h2>
                  <h3 className="modal__text">
                    Expect to hear back in 2-3 business days.
                  </h3>
                  <NavLink to="/" className="modal__button--link">
                    <button className="modal__button">Return home</button>
                  </NavLink>
                </div>
                {/* </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomOrder;
