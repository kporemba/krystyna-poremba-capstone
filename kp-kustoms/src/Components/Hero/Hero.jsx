import "./Hero.scss";
import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import image2 from "../../assets/images/home-header1.jpeg";
import image1 from "../../assets/images/home-header2.jpeg";
import image3 from "../../assets/images/home-header3.jpeg";
import image4 from "../../assets/images/home-header4.jpeg";

//importing images for carousel (images are required to be accessed from the frontend)
const items = [
  {
    src: image1,
    altText: "Flower blanket on couch",
    key: "2",
  },
  {
    src: image4,
    altText: "Close up shot of KP Kustoms logo",
    key: "1",
  },
  {
    src: image2,
    altText: "Shot of all products",
    key: "3",
  },
  {
    src: image3,
    altText: "Close-up of yarn",
    key: "4",
  },
];

const Hero = () => {
  return <UncontrolledCarousel items={items} className="hero__image" />;
};

export default Hero;
