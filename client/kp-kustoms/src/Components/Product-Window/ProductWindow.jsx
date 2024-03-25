import "./ProductWindow.scss";

function ProductWindow() {
  return (
    <div className="productWindow">
      <div className="productWindow__container">
        <div className="productWindow__image"></div>
        <h3 className="productWindow__name">Product Name</h3>
        <h4 className="productWindow__price">Price</h4>
      </div>
      <div className="productWindow__container">
        <div className="productWindow__image"></div>
        <h3 className="productWindow__name">Product Name</h3>
        <h4 className="productWindow__price">Price</h4>
      </div>
      <div className="productWindow__container">
        <div className="productWindow__image"></div>
        <h3 className="productWindow__name">Product Name</h3>
        <h4 className="productWindow__price">Price</h4>
      </div>
    </div>
  );
}

export default ProductWindow;
