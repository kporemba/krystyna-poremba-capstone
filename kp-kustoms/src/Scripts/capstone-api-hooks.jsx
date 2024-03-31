// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import ProductCard from "../Components/ProductCard/ProductCard";

// function useApi() {
//   const [products, setProducts] = useState([]);
//   const params = useParams();
//   const baseUrl = "http://localhost:8080/";

//   //calling api for product list
//   useEffect(() => {
//     const fetchProductList = async () => {
//       try {
//         const response = await axios.get({ baseUrl });
//         setProducts(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchProductList();
//   }, []);

//   return <ProductCard products={products} />;
// }

// export default useApi;
