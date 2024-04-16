import React, { useEffect, useState } from 'react';
import ProductList from './components/product-list';
import AddProduct from './components/add-product';
import Product from './types/product';
import productService from './apis/service/product.service';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await productService.getProducts();
      setProducts(response.data);
    };
    getProduct();
  }, []);

  const addProduct=(product:Product)=>{
    setProducts([...products,product])
  }

  const deleteProductById = (id:number)=>{
    products.filter(pro=>pro.id !== id)
  }

  return (
    <div className="container">
      <ProductList
        products={products}
        onDeleteProductById={deleteProductById}
      />
      <AddProduct onAddProduct={addProduct} />
    </div>
  );
}

export default App;
