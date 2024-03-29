import CustomBanner from "../../Components/Custom-Banner/CustomBanner";
import ProductWindow from "../../Components/Product-Window/ProductWindow";
import "./Shop.scss";

function Shop() {
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
    <div className="shop">
      <h1 className="shop__title">Shop</h1>

      {categoryArr.map((category) =>
        category === "Banner" ? (
          <CustomBanner />
        ) : (
          <div className="shop__group">
            <h2 className="shop__subtitle">{category}</h2>
            <ProductWindow category={category} />
          </div>
        )
      )}
    </div>
  );
}

export default Shop;
