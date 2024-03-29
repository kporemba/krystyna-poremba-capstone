import CustomBanner from "../../Components/Custom-Banner/CustomBanner";
import ProductWindow from "../../Components/Product-Window/ProductWindow";
import Hero from "../../Components/Hero/Hero";
// import UncontrolledExample from "../../Components/Hero/Hero";
import "./Home.scss";

function Home() {
  const categoryArr = [
    "Cardigans",
    "Hats",
    "Blankets",
    "Banner",
    "Sweaters",
    "Accessories",
    "Bags",
    "Knit",
  ];
  return (
    <div className="homepage">
      <div className="homepage__heroContainer">
        <Hero />
        {/* <UncontrolledExample /> */}
      </div>
      <h2 className="homepage__subtitle">{categoryArr[0]}</h2>
      <ProductWindow category={categoryArr[0]} />
      <h2 className="homepage__subtitle">{categoryArr[5]}</h2>
      <ProductWindow category={categoryArr[5]} />
      <div className="homepage__customContainer">
        <CustomBanner />
      </div>
    </div>
  );
}

export default Home;
