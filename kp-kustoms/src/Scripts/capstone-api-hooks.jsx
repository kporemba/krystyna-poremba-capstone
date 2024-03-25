import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../Components/ProductCard/ProductCard";

function useApi() {
  //   const [initProduct, setInitProduct] = useState([]);
  //   const [currentProduct, setCurrentProduct] = useState(initProduct);
  const [products, setProducts] = useState([]);
  const params = useParams();
  const baseUrl = "http://localhost:8080/";

  //calling api for product list
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get({ baseUrl });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductList();
  }, []);

  //   const id = params.currentProduct || (initProduct.length && initProduct[0].id);

  //   //   calling api for signle product
  //   useEffect(() => {
  //     const fetchProduct = async () => {
  //       try {
  //         if (id) {
  //           const response = await axios.get(`${baseUrl}/${id}`);
  //           setCurrentProduct(response.data);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchProduct();
  //   }, [id]);

  return (
    <ProductCard products={products} />
    // currentProduct: [],
    // initProduct,
    // setCurrentProduct,
  );
}

export default useApi;
