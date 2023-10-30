import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { products } = useLoaderData();

  return (
    <div>
      <h1 className="text-center my-2">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-14 justify-items-center">
        {products?.map((singleProduct) => (
          <SingleProduct key={singleProduct.id} singleProduct={singleProduct} />
        ))}
      </div>
    </div>
  );
};

export default Products;
