import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import CustomOrder from "./Pages/Custom-Order/CustomOrder";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Product/Product";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Hooray from "./Pages/Hooray/Hooray";
import { useState, useEffect } from "react";

function KpKustoms() {
  const [cartTotal, setCartTotal] = useState(0);

  const cartStr = localStorage.getItem("cart");

  //calling cart total string from local storage
  useEffect(() => {
    const cartNum = JSON.parse(cartStr);
    setCartTotal(cartNum.length);
  }, [cartStr]);

  //updating cart state
  const updateCartTotal = (value) => {
    setCartTotal(cartTotal + value);
  };

  return (
    <div className="kp-kustoms">
      <BrowserRouter>
        <Header cartTotal={cartTotal} />
        <Routes>
          <Route pathx="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route
            path="/Shop/:id"
            element={<Product updateCartTotal={updateCartTotal} />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Custom-Order" element={<CustomOrder />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route
            path="/Wishlist"
            element={<Wishlist updateCartTotal={updateCartTotal} />}
          ></Route>
          <Route
            path="/Cart"
            element={<Cart updateCartTotal={updateCartTotal} />}
          ></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/Hooray" element={<Hooray />}></Route>
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default KpKustoms;
