import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Product from "../types/product";
import productService from "../apis/service/product.service";

type Props = {
  onAddProduct: (product: Product) => void;
};

export default function AddProduct(props: Props) {
  const { onAddProduct } = props;
  const [product, setProduct] = useState<Product>({
    title: "",
    price:0,
    description: "",
  });
  const { title, price, description } = product;

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setProduct({ ...product, description: e.target.value });
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await productService.addNewProduct({title,price,description})
    
    if (response.status === 201) {
      setProduct(response.data);
      onAddProduct(product);
    }
  };

  return (
    <div>
      <h2>Add a new Product</h2>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={changeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={changeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={3}
            value={description}
            onChange={changeDescription}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
