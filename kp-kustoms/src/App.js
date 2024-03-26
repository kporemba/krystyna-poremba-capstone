import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import CustomOrder from "./Pages/Custom-Order/CustomOrder";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Product/Product";

function KpKustoms() {
  return (
    <div className="kp-kustoms">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route pathx="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Shop/:id" element={<Product />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Custom-Order" element={<CustomOrder />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default KpKustoms;
