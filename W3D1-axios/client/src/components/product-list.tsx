// import { MouseEvent, useState } from "react";
import Product from "../types/product";
import productService from "../apis/service/product.service";

type Props = {
  products: Product[];
  onDeleteProductById: (id: number) => void;
};

export default function ProductList(props: Props) {
  const { products, onDeleteProductById } = props;

  const deleteProductHandler = async (id: number) => {
    const response = await productService.deleteProduct(id);
    if (response.status === 200) {
      onDeleteProductById(id);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <th scope="row">{prod.id}</th>
              <td>{prod.title}</td>
              <td>{prod.price}</td>
              <td>{prod.description}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => deleteProductHandler(prod.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
