import "./Hero.scss";
import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import image1 from "../../assets/images/home-header1.JPG";
import image2 from "../../assets/images/home-header2.jpeg";
import image3 from "../../assets/images/home-header3.jpeg";

//to make it work make a server request
//images under 2KB
// import image1 from "http://localhost:8080/images/home-header1.jpg";
// import image2 from "http://localhost:8080/images/home-header2.jpeg";
// import image3 from "http://localhost:8080/images/home-header3.jpeg";

const items = [
  {
    src: image1,
    altText: "Slide 1",
    key: "1",
  },
  {
    src: image2,
    altText: "Slide 2",
    key: "2",
  },
  {
    src: image3,
    altText: "Slide 3",
    key: "3",
  },
];

const Hero = () => {
  return <UncontrolledCarousel items={items} className="hero__image" />;
};

export default Hero;
