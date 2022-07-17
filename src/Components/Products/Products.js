import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

// Fake store api URL
const BASE_URL = `https://fakestoreapi.com/products`;

const Products = ({increasedCount}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="section container">
      <div className="product__container">
        {products.map((product) => (
          <Product key={product.id} product={product} increasedCount={increasedCount}></Product>
        ))}
      </div>
    </section>
  );
};

export default Products;
