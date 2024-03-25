import CustomBanner from "../../Components/Custom-Banner/CustomBanner";
import ProductWindow from "../../Components/Product-Window/ProductWindow";
import Hero from "../../Components/Hero/Hero";
import "./Home.scss";

function Home() {
  return (
    <div className="homepage">
      <div className="homepage__heroContainer">
        <Hero />
      </div>
      <h2 className="homepage__title">New</h2>
      <ProductWindow />
      <h2 className="homepage__title">Best Sellers</h2>
      <ProductWindow />
      <div className="homepage__customContainer">
        <CustomBanner />
      </div>
    </div>
  );
}

export default Home;
