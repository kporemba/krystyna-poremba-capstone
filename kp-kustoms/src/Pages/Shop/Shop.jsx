import CustomBanner from "../../Components/Custom-Banner/CustomBanner";
import ProductWindow from "../../Components/Product-Window/ProductWindow";
import "./Shop.scss";

function Shop() {
  return (
    <div className="shop">
      <h1 className="shop__title">Shop</h1>
      <div className="shop__group">
        <h2 className="shop__subtitle">Cardigans</h2>
        <ProductWindow />
      </div>
      <div className="shop__group">
        <h2 className="shop__subtitle">Hats</h2>
        <ProductWindow />
      </div>
      <div className="shop__group">
        <h2 className="shop__subtitle">Blankets</h2>
        <ProductWindow />
      </div>
      <CustomBanner />

      <div className="shop__group">
        <h2 className="shop__subtitle">Sweaters</h2>
        <ProductWindow />
      </div>
      <div className="shop__group">
        <h2 className="shop__subtitle">Accessories</h2>
        <ProductWindow />
      </div>
      <div className="shop__group">
        <h2 className="shop__subtitle">Bags</h2>
        <ProductWindow />
      </div>
      <div className="shop__group">
        <h2 className="shop__subtitle">Knit</h2>
        <ProductWindow />
      </div>
    </div>
  );
}

export default Shop;
