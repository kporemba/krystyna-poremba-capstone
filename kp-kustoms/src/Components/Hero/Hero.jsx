import "./Hero.scss";
import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import image2 from "../../assets/images/home-header1.jpeg";
import image1 from "../../assets/images/home-header2.jpeg";
import image3 from "../../assets/images/home-header3.jpeg";
import image4 from "../../assets/images/home-header4.jpeg";

//to make it work make a server request
//images under 2KB
// import image1 from "http://localhost:8080/images/home-header1.jpg";
// import image2 from "http://localhost:8080/images/home-header2.jpeg";
// import image3 from "http://localhost:8080/images/home-header3.jpeg";

const items = [
  {
    src: image1,
    altText: "Display of products",
    key: "2",
  },
  {
    src: image4,
    altText: "Close up shot of KP Kustoms logo",
    key: "1",
  },
  {
    src: image2,
    altText: "Close-up of yarn",
    key: "3",
  },
  {
    src: image3,
    altText: "Close-up of yarn",
    key: "3",
  },
];

const Hero = () => {
  return <UncontrolledCarousel items={items} className="hero__image" />;
};

export default Hero;

// import Carousel from "react-bootstrap/Carousel";
// // import Carousel from "reactstrap";
// import ExampleCarouselImage from "../../assets/images/home-header1.jpeg";

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;
