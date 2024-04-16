import http from "../axios";
import Product from "../../types/product";

const getProducts = () => {
  return http.get("/products");
};
const addNewProduct = (product: Product) => {
  return http.post("/products", product);
};
const deleteProduct = (id: number) => {
  return http.delete("/products/" + id);
};

export default {
  getProducts,
  addNewProduct,
  deleteProduct,
};
